import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    qualities: [75, 85, 90, 100],
  },
  turbopack: {},
  async redirects() {
    return [
      {
        source: "/resume-arif-prasetyo.pdf",
        destination: "/resume",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
