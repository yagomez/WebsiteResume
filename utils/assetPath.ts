/**
 * Utility to get the correct asset path when deployed to a subdirectory
 * Handles basePath prefix for GitHub Pages deployment
 */

// Import basePath from config if available, or use empty string for development
export const getAssetPath = (path: string): string => {
  // In production on GitHub Pages, assets are under /WebsiteResume/
  // In development, they're at the root
  const basePath = typeof window !== 'undefined' && window.location.pathname.includes('WebsiteResume') 
    ? '/WebsiteResume' 
    : '';
  
  // Remove leading slash if path has one, we'll add it back
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};
