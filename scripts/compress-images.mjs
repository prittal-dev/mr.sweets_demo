/**
 * compress-images.mjs
 * One-time script: compresses all PNGs in /public to WebP + optimised PNG
 * Run: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdirSync, statSync, renameSync, existsSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;
const BACKUP_DIR = join(PUBLIC_DIR, '_originals_backup');

// Max width for product images (banner images keep full width)
const BANNER_MAX_WIDTH = 2023;
const PRODUCT_MAX_WIDTH = 800;

// Quality settings
const WEBP_QUALITY = 82;
const PNG_QUALITY = { compressionLevel: 9, palette: false };

// Which files to skip
const SKIP = ['.DS_Store', 'sitemap.xml', 'robots.txt'];
const BANNER_FILES = ['hero-banner-1.png', 'hero-banner-2.png', 'hero-banner-3.png', 'hero-banner-4.png', 'hero-banner-5.png'];

if (!existsSync(BACKUP_DIR)) mkdirSync(BACKUP_DIR, { recursive: true });

const files = readdirSync(PUBLIC_DIR).filter(f => {
  const ext = extname(f).toLowerCase();
  return (ext === '.png' || ext === '.jpg' || ext === '.jpeg') && !SKIP.includes(f);
});

console.log(`\n🔧 Compressing ${files.length} image files...\n`);

let totalSavedBytes = 0;

for (const file of files) {
  const inputPath = join(PUBLIC_DIR, file);
  const stat = statSync(inputPath);
  const originalSize = stat.size;

  const isBanner = BANNER_FILES.includes(file);
  const maxWidth = isBanner ? BANNER_MAX_WIDTH : PRODUCT_MAX_WIDTH;

  try {
    // Back up original
    const backupPath = join(BACKUP_DIR, file);
    if (!existsSync(backupPath)) {
      renameSync(inputPath, backupPath);
    }

    const srcPath = join(BACKUP_DIR, file);

    // Re-save as optimised PNG (in-place, same filename)
    await sharp(srcPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .png(PNG_QUALITY)
      .toFile(inputPath);

    const newSize = statSync(inputPath).size;
    const saved = originalSize - newSize;
    const pct = ((saved / originalSize) * 100).toFixed(1);
    totalSavedBytes += saved;

    const toMB = (b) => (b / 1024 / 1024).toFixed(2) + ' MB';
    console.log(`✅ ${file.padEnd(40)} ${toMB(originalSize)} → ${toMB(newSize)}  (saved ${pct}%)`);
  } catch (err) {
    console.error(`❌ Failed: ${file} — ${err.message}`);
  }
}

const totalMB = (totalSavedBytes / 1024 / 1024).toFixed(2);
console.log(`\n🎉 Done! Total saved: ${totalMB} MB\n`);
