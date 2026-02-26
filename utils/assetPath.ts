/**
 * Utility to get the correct asset path when deployed to a subdirectory
 * Handles basePath prefix for GitHub Pages deployment
 */

export const getAssetPath = (path: string): string => {
  // Always use /WebsiteResume prefix for GitHub Pages
  // Next.js handles it automatically in dev, but we need it for deployed URLs
  const basePath = '/WebsiteResume';
  
  // Remove leading slash if path has one, we'll add it back
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};
