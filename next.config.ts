import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  // Only use basePath for production (e.g. GitHub Pages at /WebsiteResume); dev uses /
  basePath: isDev ? "" : "/WebsiteResume",
  assetPrefix: isDev ? "" : "/WebsiteResume/",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
