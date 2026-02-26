import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/WebsiteResume",
  assetPrefix: "/WebsiteResume/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
