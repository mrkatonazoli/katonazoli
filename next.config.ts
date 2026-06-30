import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/rsnew", destination: "/rsnew.html" },
    ];
  },
};

export default nextConfig;
