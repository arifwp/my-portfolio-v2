import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
    qualities: [75, 85, 90, 100],
  },
  turbopack: {},
};

export default nextConfig;
