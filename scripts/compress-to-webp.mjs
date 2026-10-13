/**
 * compress-to-webp.mjs
 * Converts all large PNGs in /public to highly-compressed WebP.
 * WebP gives 60-80% smaller files vs PNG at same visual quality.
 * Run: node scripts/compress-to-webp.mjs
 */

import sharp from 'sharp';
import { readdirSync, statSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;
const BACKUP_DIR = join(PUBLIC_DIR, '_originals_backup');

const SKIP_FILES = ['.DS_Store', 'sitemap.xml', 'robots.txt', 'mr_sweet_logo.svg'];
const BANNER_FILES = new Set(['hero-banner-1.png', 'hero-banner-2.png', 'hero-banner-3.png', 'hero-banner-4.png', 'hero-banner-5.png']);

// Resolution limits
const BANNER_MAX_W = 1600;   // banners: enough for full-width on 4K retina
const PRODUCT_MAX_W = 700;   // product cards shown at ~300px, 2x = 600px

// WebP quality (80 = visually lossless, ~60-80% smaller than PNG)
const WEBP_Q = 82;

if (!existsSync(BACKUP_DIR)) mkdirSync(BACKUP_DIR, { recursive: true });

const files = readdirSync(PUBLIC_DIR).filter(f => {
  const ext = extname(f).toLowerCase();
  return (ext === '.png' || ext === '.jpg' || ext === '.jpeg') && !SKIP_FILES.includes(f);
});

console.log(`\n🚀 Converting ${files.length} images to WebP...\n`);

let totalOriginal = 0;
let totalNew = 0;
// Track mapping for code references
const mapping = {};

for (const file of files) {
  const inputPath = join(PUBLIC_DIR, file);
  const isBanner = BANNER_FILES.has(file);
  const maxW = isBanner ? BANNER_MAX_W : PRODUCT_MAX_W;

  // Original name without extension
  const nameWithoutExt = basename(file, extname(file));
  const webpFile = nameWithoutExt + '.webp';
  const webpPath = join(PUBLIC_DIR, webpFile);

  const originalSize = statSync(inputPath).size;
  totalOriginal += originalSize;

  try {
    await sharp(inputPath)
      .resize({ width: maxW, withoutEnlargement: true })
      .webp({ quality: WEBP_Q, effort: 6 })
      .toFile(webpPath);

    const newSize = statSync(webpPath).size;
    totalNew += newSize;
    const saved = originalSize - newSize;
    const pct = ((saved / originalSize) * 100).toFixed(1);
    const toMB = (b) => (b / 1024 / 1024).toFixed(2) + 'MB';

    mapping[file] = webpFile;
    console.log(`✅ ${file.padEnd(42)} ${toMB(originalSize)} → ${toMB(newSize)}  (-${pct}%)`);
  } catch (err) {
    console.error(`❌ FAILED: ${file} — ${err.message}`);
  }
}

const toMB = (b) => (b / 1024 / 1024).toFixed(1);
console.log(`\n🎉 Total: ${toMB(totalOriginal)}MB → ${toMB(totalNew)}MB  (saved ${toMB(totalOriginal - totalNew)}MB / ${(((totalOriginal - totalNew)/totalOriginal)*100).toFixed(1)}%)\n`);

// Write the mapping so we can update code references
writeFileSync(join(PUBLIC_DIR, '_webp_mapping.json'), JSON.stringify(mapping, null, 2));
console.log('📝 Mapping written to public/_webp_mapping.json\n');
