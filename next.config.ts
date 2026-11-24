import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

const projectRoot = fs.realpathSync?.native
  ? fs.realpathSync.native(process.cwd())
  : process.cwd();

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "127.0.0.1:3000",
    "localhost:3000",
  ],
  webpack: (config) => {
    config.context = projectRoot;
    config.resolve = config.resolve || {};
    config.resolve.modules = [
      path.resolve(projectRoot, "node_modules"),
      ...(config.resolve.modules || ["node_modules"]),
    ];
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uswat.edu.pk",
      },
      {
        protocol: "http",
        hostname: "uswat.edu.pk",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
