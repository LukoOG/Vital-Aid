import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  remotePatterns: {
    domains: ["firebasestorage.googleapis.com"], // Replace with the actual domain
  },
};


export default nextConfig;
