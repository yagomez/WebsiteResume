/**
 * Base path for the app: empty in development, /WebsiteResume on GitHub Pages.
 * Use for assets (getAssetPath) and any manual hrefs that must work in both environments.
 */
export const getBasePath = (): string =>
  typeof process !== "undefined" && process.env.NODE_ENV === "development"
    ? ""
    : "/WebsiteResume";

/**
 * Full URL path for static assets (images, music).
 * Works locally (/) and on GitHub Pages (/WebsiteResume).
 */
export const getAssetPath = (path: string): string => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${getBasePath()}${cleanPath}`;
};
