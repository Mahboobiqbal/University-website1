import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

const projectRoot = fs.realpathSync?.native
  ? fs.realpathSync.native(process.cwd())
  : process.cwd();

const nextConfig: NextConfig = {
  experimental: {
    cpus: 1,
  },
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
