import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ✅ Ensures standalone build for Vercel
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
