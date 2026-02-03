/**
 * Generate search index from all research articles
 * Run at build time alongside llms.txt generation
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const researchDir = path.join(__dirname, '../src/content/research');
const outputPath = path.join(__dirname, '../public/search-index.json');

// Read all articles and build search index
const articles = fs.readdirSync(researchDir)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
        const content = fs.readFileSync(path.join(researchDir, filename), 'utf8');

        // Extract frontmatter
        const titleMatch = content.match(/title:\s*"([^"]+)"/);
        const excerptMatch = content.match(/excerpt:\s*"([^"]+)"/);
        const dateMatch = content.match(/date:\s*(\d{4}-\d{2}-\d{2})/);
        const tagsMatch = content.match(/tags:\s*\n((?:\s+-\s*.+\n)*)/);
        const categoriesMatch = content.match(/categories:\s*\n((?:\s+-\s*.+\n)*)/);

        // Extract body content (after frontmatter)
        const bodyMatch = content.match(/---[\s\S]*?---\s*([\s\S]*)/);
        const body = bodyMatch ? bodyMatch[1] : '';

        // Clean body for search (remove markdown syntax, limit length)
        const cleanBody = body
            .replace(/```[\s\S]*?```/g, '') // Remove code blocks
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
            .replace(/#{1,6}\s*/g, '') // Remove headers
            .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
            .replace(/\*([^*]+)\*/g, '$1') // Remove italic
            .replace(/[`~]/g, '') // Remove code/strikethrough markers
            .replace(/\n+/g, ' ') // Collapse newlines
            .replace(/\s+/g, ' ') // Collapse spaces
            .trim()
            .slice(0, 500); // Limit for index size

        const slug = filename.replace('.md', '');
        const number = parseInt(filename.split('-')[0]) || 0;

        const tags = tagsMatch
            ? tagsMatch[1].match(/- (.+)/g)?.map(t => t.replace('- ', '').trim()) || []
            : [];

        const categories = categoriesMatch
            ? categoriesMatch[1].match(/- (.+)/g)?.map(c => c.replace('- ', '').trim()) || []
            : [];

        return {
            id: number,
            title: titleMatch ? titleMatch[1] : filename,
            excerpt: excerptMatch ? excerptMatch[1] : '',
            slug,
            date: dateMatch ? dateMatch[1] : '',
            tags,
            categories,
            body: cleanBody
        };
    })
    .sort((a, b) => b.id - a.id); // Newest first

fs.writeFileSync(outputPath, JSON.stringify(articles, null, 2));
console.log(`✓ Generated search-index.json with ${articles.length} articles`);
