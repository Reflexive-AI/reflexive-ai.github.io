import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../src/content/research');
const outputDir = path.join(__dirname, '../public');
const outputFile = path.join(outputDir, 'lattice.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Helper to extract frontmatter and content
function parseMarkdown(content) {
    // Handle Windows CRLF
    const normalized = content.replace(/\r\n/g, '\n');
    const match = normalized.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return null;

    const frontmatterRaw = match[1];
    const body = match[2];
    const metadata = {};

    let currentKey = null;

    const lines = frontmatterRaw.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check for list item: "  - value" or "- value"
        const listMatch = line.match(/^\s*-\s+(.+)$/);
        if (listMatch) {
            if (currentKey) {
                if (!Array.isArray(metadata[currentKey])) {
                    metadata[currentKey] = [];
                }
                metadata[currentKey].push(listMatch[1].trim());
            }
            continue;
        }

        // Check for key: "key: value" or "key:"
        const keyMatch = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
        if (keyMatch) {
            const key = keyMatch[1].trim();
            let value = keyMatch[2].trim();

            // Handle inline array [a, b]
            if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(v => v.trim());
            } else if (value === '' || value === null) {
                // If empty value, it might be start of a list
                // Initialize as empty array anticipating items?
                // Or just wait for the next line to decide.
                // We'll set it to null for now.
                value = null;
            } else if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }

            metadata[key] = value;
            currentKey = key;
        }
    }

    return { metadata, body };
}

console.log('Generating Neural Lattice data...');

console.log(`Scanning directory: ${contentDir}`);

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
console.log(`Found ${files.length} markdown files.`);

const nodes = [];
const links = [];
const tagMap = new Map();

// 1. Process Articles to build Tag Map
files.forEach(file => {
    const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const parsed = parseMarkdown(content);
    if (!parsed) return;

    const { metadata } = parsed;
    const slug = file.replace('.md', '');

    // Only process if we have tags
    if (Array.isArray(metadata.tags)) {
        metadata.tags.forEach(tag => {
            const normalizedTag = tag.toLowerCase().trim();
            if (!tagMap.has(normalizedTag)) {
                tagMap.set(normalizedTag, {
                    id: normalizedTag,
                    title: tag, // Keep original casing for display
                    count: 0,
                    articles: [],
                    group: 'concept' // Default group
                });
            }

            const tagNode = tagMap.get(normalizedTag);
            tagNode.count++;
            tagNode.articles.push({
                title: metadata.title,
                slug: `/research/${slug}`,
                excerpt: metadata.excerpt
            });

            // Simple heuristic for grouping
            if (['compliance', 'regulation', 'audit', 'law', 'policy'].some(k => normalizedTag.includes(k))) {
                tagNode.group = 'governance';
            } else if (['weight', 'model', 'data', 'search', 'compute'].some(k => normalizedTag.includes(k))) {
                tagNode.group = 'technical';
            }
        });
    }
});

// 2. Generate Nodes from Tag Map
Array.from(tagMap.values()).forEach(t => {
    nodes.push({
        id: t.id,
        title: t.title,
        group: t.group,
        val: Math.min(30, 5 + (t.count * 2)), // Size = base + frequency
        articles: t.articles // Embed article list in node for UI
    });
});

// 3. Generate Links based on Co-occurrence
const linkMap = new Map();

files.forEach(file => {
    const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const parsed = parseMarkdown(content);
    if (!parsed || !Array.isArray(parsed.metadata.tags)) return;

    const tags = parsed.metadata.tags.map(t => t.toLowerCase().trim());

    // Connect every tag in this article to every other tag
    for (let i = 0; i < tags.length; i++) {
        for (let j = i + 1; j < tags.length; j++) {
            const source = tags[i] < tags[j] ? tags[i] : tags[j];
            const target = tags[i] < tags[j] ? tags[j] : tags[i];
            const key = `${source}-${target}`;

            if (linkMap.has(key)) {
                linkMap.get(key).weight++;
            } else {
                linkMap.set(key, { source, target, weight: 1 });
            }
        }
    }
});

linkMap.forEach((link) => {
    links.push({
        source: link.source,
        target: link.target,
        value: Math.min(5, link.weight) // Thickness cap
    });
});

const data = { nodes, links };
fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

console.log(`✓ Generated Concept Lattice: ${nodes.length} tags, ${links.length} connections`);
