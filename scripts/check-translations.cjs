/**
 * check-translations.js
 * 
 * Scans src/content/research/ and verifies that every English article
 * has corresponding Spanish (es/) and Catalan (ca/) translations.
 * 
 * Exit codes:
 *   0 = all translations present
 *   1 = missing translations found
 */

const fs = require('fs');
const path = require('path');

const researchDir = path.join(__dirname, '..', 'src', 'content', 'research');
const langs = ['es', 'ca'];

// Get all English articles (top-level .md files, not in subdirectories)
const enFiles = fs.readdirSync(researchDir)
    .filter(f => f.endsWith('.md') && fs.statSync(path.join(researchDir, f)).isFile());

console.log(`Found ${enFiles.length} English articles\n`);

let totalMissing = 0;
const report = {};

for (const lang of langs) {
    const langDir = path.join(researchDir, lang);
    const langFiles = fs.existsSync(langDir)
        ? new Set(fs.readdirSync(langDir).filter(f => f.endsWith('.md')))
        : new Set();

    const missing = enFiles.filter(f => !langFiles.has(f));
    report[lang] = { total: langFiles.size, missing };
    totalMissing += missing.length;

    console.log(`[${lang.toUpperCase()}] ${langFiles.size}/${enFiles.length} translated`);
    if (missing.length > 0) {
        console.log(`  Missing (${missing.length}):`);
        missing.forEach(f => console.log(`    - ${f}`));
    } else {
        console.log('  All translations present');
    }
    console.log('');
}

if (totalMissing > 0) {
    console.log(`Total missing translations: ${totalMissing}`);
    process.exit(1);
} else {
    console.log('All translations are up to date');
    process.exit(0);
}
