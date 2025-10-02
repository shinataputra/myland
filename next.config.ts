import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true },
  basePath: "/myland",
  assetPrefix: "/myland",
};

export default nextConfig;
