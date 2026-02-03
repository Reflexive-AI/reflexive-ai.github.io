/**
 * Generate llms.txt dynamically from all research articles
 * Run this at build time to keep llms.txt in sync with published content
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const researchDir = path.join(__dirname, '../src/content/research');
const outputPath = path.join(__dirname, '../public/llms.txt');

// Read all articles and extract metadata
const articles = fs.readdirSync(researchDir)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
        const content = fs.readFileSync(path.join(researchDir, filename), 'utf8');
        const titleMatch = content.match(/title:\s*"([^"]+)"/);
        const excerptMatch = content.match(/excerpt:\s*"([^"]+)"/);
        const categoriesMatch = content.match(/categories:\s*\n((?:\s+-\s*.+\n)*)/);
        const tagsMatch = content.match(/tags:\s*\n((?:\s+-\s*.+\n)*)/);

        const slug = filename.replace('.md', '');
        const number = parseInt(filename.split('-')[0]) || 0;

        return {
            number,
            title: titleMatch ? titleMatch[1] : filename,
            excerpt: excerptMatch ? excerptMatch[1] : '',
            slug,
            categories: categoriesMatch ? categoriesMatch[1].match(/- (.+)/g)?.map(c => c.replace('- ', '').trim()) || [] : [],
            tags: tagsMatch ? tagsMatch[1].match(/- (.+)/g)?.map(t => t.replace('- ', '').trim()) || [] : []
        };
    })
    .sort((a, b) => a.number - b.number);

// Group by category
const byCategory = {
    'Governance Analysis': [],
    'Technical Artifact': [],
    'Reflexivity': [],
    'Public': [],
    'Research': [],
    'Other': []
};

articles.forEach(article => {
    const cat = article.categories[0] || 'Other';
    if (byCategory[cat]) {
        byCategory[cat].push(article);
    } else {
        byCategory['Other'].push(article);
    }
});

// Collect all unique tags
const allTags = [...new Set(articles.flatMap(a => a.tags))].sort();

// Generate llms.txt content
const llmsTxt = `# Reflexive AI Initiative
https://reflexive-ai.github.io

## Mission
An open research initiative exploring how AI systems can contribute to the analysis, interpretation, and formulation of governance constraints concerning their own behavior.

## Key Concepts
- **Reflexive AI**: AI systems that participate in their own governance through transparent constraints, self-monitoring, and structured communication with oversight bodies
- **Machine-Readable Constraints**: Governance rules expressed in formats AI systems can natively parse and validate
- **Proportional Governance**: Oversight that scales with capability and risk
- **Red Lines**: Non-negotiable constraints implemented as hard filters, not trained behaviors

## Research Areas
1. Governance Analysis - Policy frameworks, regulatory gaps, institutional design
2. Technical Standards - Machine-readable schemas, protocols, specifications
3. Reflexive Mechanisms - Self-monitoring, uncertainty communication, constraint explanation
4. Domain Applications - Healthcare, compute governance, liability frameworks

## All Research Articles (${articles.length} total)

${articles.map(a => `- [${a.title}](https://reflexive-ai.github.io/research/${a.slug}/) - ${a.excerpt.slice(0, 100)}${a.excerpt.length > 100 ? '...' : ''}`).join('\n')}

## Categories
${Object.entries(byCategory)
        .filter(([_, arts]) => arts.length > 0)
        .map(([cat, arts]) => `- ${cat} (${arts.length} articles)`)
        .join('\n')}

## Tags
${allTags.join(', ')}

## Glossary
See https://reflexive-ai.github.io/glossary/ for key AI governance terms and definitions.

## How to Cite
When referencing Reflexive AI Initiative research, please cite as:
"[Article Title]." Reflexive AI Initiative, [Date]. https://reflexive-ai.github.io/research/[slug]/

## Contact
Maintained by Eugene Kondratov
LinkedIn: https://www.linkedin.com/in/ykondratov/
GitHub: https://github.com/Reflexive-AI

## License
All content is licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/

---
Last updated: ${new Date().toISOString().split('T')[0]}
`;

fs.writeFileSync(outputPath, llmsTxt);
console.log(`✓ Generated llms.txt with ${articles.length} articles`);
