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

    frontmatterRaw.split('\n').forEach(line => {
        const parts = line.split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            let value = parts.slice(1).join(':').trim();

            // Basic YAML parsing
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(v => v.trim());
            }

            metadata[key] = value;
        }
    });

    return { metadata, body };
}

console.log('Generating Neural Lattice data...');

console.log(`Scanning directory: ${contentDir}`);

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
console.log(`Found ${files.length} markdown files.`);

const nodes = [];
const links = [];
const tagMap = new Map();

// 1. Process Nodes
files.forEach(file => {
    const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const parsed = parseMarkdown(content);

    if (!parsed) return;

    const { metadata, body } = parsed;
    const slug = file.replace('.md', '');
    const id = slug;

    // Categorize
    let group = 'research';
    if (Array.isArray(metadata.categories)) {
        if (metadata.categories.some(c => c.toLowerCase().includes('governance'))) group = 'governance';
        else if (metadata.categories.some(c => c.toLowerCase().includes('technical'))) group = 'technical';
    } else if (typeof metadata.categories === 'string') {
        if (metadata.categories.toLowerCase().includes('governance')) group = 'governance';
        else if (metadata.categories.toLowerCase().includes('technical')) group = 'technical';
    }

    // Calculate "Heat" (Recency)
    const date = new Date(metadata.date || new Date());
    const now = new Date();
    const daysOld = (now - date) / (1000 * 60 * 60 * 24);
    const heat = Math.max(0, 1 - (daysOld / 30)); // 1.0 = brand new, 0.0 = >30 days

    nodes.push({
        id,
        title: metadata.title || slug,
        group,
        val: Math.min(20, (body.length / 100)) + (heat * 10), // Size based on length + recency
        slug: `/research/${slug}`,
        excerpt: metadata.excerpt || '',
        heat,
        tags: Array.isArray(metadata.tags) ? metadata.tags : []
    });

    // Track tags for clustering
    if (Array.isArray(metadata.tags)) {
        metadata.tags.forEach(tag => {
            if (!tagMap.has(tag)) tagMap.set(tag, []);
            tagMap.get(tag).push(id);
        });
    }

    // 2. Process Hard Links (Cross-references)
    const linkMatches = body.matchAll(/\/research\/([a-zA-Z0-9-]+)/g);
    const linkedTargets = new Set();

    for (const match of linkMatches) {
        const targetSlug = match[1];
        if (targetSlug !== slug) {
            linkedTargets.add(targetSlug);
        }
    }

    linkedTargets.forEach(target => {
        links.push({
            source: id,
            target: target,
            value: 2 // Strong connection
        });
    });
});

// 3. Process Soft Links (Shared Tags) & Ghost Nodes
const ghostNodes = [];

tagMap.forEach((ids, tag) => {
    // If many nodes share a tag, they are loosely connected
    if (ids.length > 1) {
        for (let i = 0; i < ids.length; i++) {
            for (let j = i + 1; j < ids.length; j++) {
                // Only add soft link if no hard link exists
                const existing = links.find(l =>
                    (l.source === ids[i] && l.target === ids[j]) ||
                    (l.source === ids[j] && l.target === ids[i])
                );

                if (!existing) {
                    links.push({
                        source: ids[i],
                        target: ids[j],
                        value: 0.5 // Weak connection
                    });
                }
            }
        }
    }

    // Create Ghost Nodes for tag clusters that are dense but might need a "Hub"
    // or just to populate empty space
    if (ids.length >= 3) {
        const ghostId = `ghost-${tag}`;
        ghostNodes.push({
            id: ghostId,
            title: `Potential: ${tag} Nexus`,
            group: 'ghost',
            val: 5,
            slug: '#', // No link
            excerpt: `Hypothetical article synthesizing ${tag} concepts.`,
            tags: [tag]
        });

        // Link ghost to its constituents
        ids.forEach(id => {
            links.push({
                source: ghostId,
                target: id,
                value: 0.2
            });
        });
    }
});

// Add Ghost Nodes to main list
// Limit ghost nodes to keep it clean
const limitedGhosts = ghostNodes.slice(0, 15);
nodes.push(...limitedGhosts);

const data = { nodes, links };
fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

console.log(`✓ Generated Lattice: ${nodes.length} nodes (${limitedGhosts.length} ghosts), ${links.length} links`);
