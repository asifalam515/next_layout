import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextjs.org",
      },
    ],
  },
};

export default nextConfig;
