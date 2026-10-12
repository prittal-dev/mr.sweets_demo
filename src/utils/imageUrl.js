/**
 * Utility to safely resolve and encode image paths across dev, preview, and production environments.
 * Handles spaces in filenames and ensures valid URI encoding for all web servers.
 */
export function getProductImage(path) {
  if (!path) return '/swiss choclate.png';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  // Clean leading slash
  const cleanPath = path.replace(/^\//, '');
  
  // Return encoded root path e.g. /dairy%20cone.png
  return `/${encodeURI(cleanPath)}`;
}

/**
 * Image error handler that attempts smart fallbacks across all environment possibilities:
 * 1. Tries relative encoded path (for subpaths / GitHub Pages)
 * 2. Tries root raw unencoded path (for servers that expect raw spaces)
 * 3. Tries relative raw unencoded path
 * 4. Fallbacks to a guaranteed working local confectionery image
 */
export function handleImageError(e, originalPath) {
  const img = e.currentTarget;
  if (!img) return;

  const clean = (originalPath || '').replace(/^\//, '');

  if (!img.dataset.triedRelative) {
    img.dataset.triedRelative = 'true';
    img.src = encodeURI(clean);
    return;
  }

  if (!img.dataset.triedRaw) {
    img.dataset.triedRaw = 'true';
    img.src = `/${clean}`;
    return;
  }

  if (!img.dataset.triedRelRaw) {
    img.dataset.triedRelRaw = 'true';
    img.src = clean;
    return;
  }

  if (!img.dataset.triedFallback) {
    img.dataset.triedFallback = 'true';
    img.src = '/swiss choclate.png';
  }
}
