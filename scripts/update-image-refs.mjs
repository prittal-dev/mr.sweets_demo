/**
 * update-image-refs.mjs
 * Replaces all .png / .jpg / .jpeg image references in /src with .webp
 * Skips the SVG logo and any file that doesn't have a matching .webp in /public
 * Run: node scripts/update-image-refs.mjs
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const SRC_DIR = new URL('../src', import.meta.url).pathname;
const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;

// Extensions to update in source
const IMG_PATTERN = /(['"`])(\/[^'"`]+\.(png|jpg|jpeg))(['"`])/gi;

// Skip these
const SKIP_PATTERNS = ['mr_sweet_logo', 'mr_sweet ', 'sitemap', 'robots'];

function getAllSourceFiles(dir) {
  let result = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) result = result.concat(getAllSourceFiles(full));
    else if (['.js', '.jsx', '.ts', '.tsx'].includes(extname(entry.name))) result.push(full);
  }
  return result;
}

const files = getAllSourceFiles(SRC_DIR);
let totalReplaced = 0;

for (const filePath of files) {
  let content = readFileSync(filePath, 'utf8');
  let changed = false;

  const updated = content.replace(IMG_PATTERN, (match, q1, imgPath, ext, q2) => {
    // Skip SVG and special patterns
    if (SKIP_PATTERNS.some(p => imgPath.includes(p))) return match;

    // Build the webp equivalent path
    const webpPath = imgPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const webpAbsolute = join(PUBLIC_DIR, webpPath);

    // Only replace if the .webp file actually exists
    if (existsSync(webpAbsolute)) {
      changed = true;
      totalReplaced++;
      return `${q1}${webpPath}${q2}`;
    }
    return match;
  });

  if (changed) {
    writeFileSync(filePath, updated, 'utf8');
    const relPath = filePath.replace(SRC_DIR, 'src');
    console.log(`✅ Updated: ${relPath}`);
  }
}

console.log(`\n🎉 Done! Replaced ${totalReplaced} image references with .webp equivalents.\n`);
