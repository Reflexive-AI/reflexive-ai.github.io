// Script to distribute dates across articles
// Run with: node scripts/update-dates.mjs

import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const RESEARCH_DIR = './src/content/research';
const START_DATE = new Date('2026-01-01');
const END_DATE = new Date('2026-02-02');

async function main() {
  const files = await readdir(RESEARCH_DIR);
  const mdFiles = files.filter(f => f.endsWith('.md')).sort();
  
  const totalDays = Math.floor((END_DATE - START_DATE) / (1000 * 60 * 60 * 24));
  const interval = totalDays / (mdFiles.length - 1);
  
  console.log(`Found ${mdFiles.length} articles`);
  console.log(`Distributing over ${totalDays} days (interval: ${interval.toFixed(2)} days)`);
  
  for (let i = 0; i < mdFiles.length; i++) {
    const file = mdFiles[i];
    const filePath = join(RESEARCH_DIR, file);
    
    // Calculate date for this article
    const daysOffset = Math.round(i * interval);
    const articleDate = new Date(START_DATE);
    articleDate.setDate(articleDate.getDate() + daysOffset);
    const dateStr = articleDate.toISOString().split('T')[0];
    
    // Read file
    let content = await readFile(filePath, 'utf-8');
    
    // Check if file has frontmatter
    if (!content.startsWith('---')) {
      console.log(`Skipping ${file} - no frontmatter`);
      continue;
    }
    
    // Find end of frontmatter
    const secondDash = content.indexOf('---', 3);
    if (secondDash === -1) {
      console.log(`Skipping ${file} - malformed frontmatter`);
      continue;
    }
    
    const frontmatter = content.slice(0, secondDash);
    const body = content.slice(secondDash);
    
    // Update or add date
    let newFrontmatter;
    if (frontmatter.includes('date:')) {
      // Replace existing date
      newFrontmatter = frontmatter.replace(/date:\s*["']?\d{4}-\d{2}-\d{2}["']?/g, `date: ${dateStr}`);
    } else {
      // Add date after excerpt or title
      if (frontmatter.includes('excerpt:')) {
        // Find end of excerpt line (could be multi-line)
        const excerptMatch = frontmatter.match(/excerpt:\s*["']?[^"'\n]+["']?\n/);
        if (excerptMatch) {
          const insertPos = frontmatter.indexOf(excerptMatch[0]) + excerptMatch[0].length;
          newFrontmatter = frontmatter.slice(0, insertPos) + `date: ${dateStr}\n` + frontmatter.slice(insertPos);
        } else {
          // Multi-line excerpt, add before categories
          newFrontmatter = frontmatter.replace(/categories:/, `date: ${dateStr}\ncategories:`);
        }
      } else {
        // Add after title
        newFrontmatter = frontmatter.replace(/(title:\s*["'][^"']+["']\n)/, `$1date: ${dateStr}\n`);
      }
    }
    
    const newContent = newFrontmatter + body;
    await writeFile(filePath, newContent, 'utf-8');
    console.log(`Updated ${file} -> ${dateStr}`);
  }
  
  console.log('Done!');
}

main().catch(console.error);
