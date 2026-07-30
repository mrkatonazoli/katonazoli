import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/bonvital": ["./src/app/bonvital/dashboard.html"],
  },
  async rewrites() {
    return [
      { source: "/rsnew", destination: "/rsnew.html" },
      { source: "/sauska", destination: "/sauska.html" },
      { source: "/starthu", destination: "/starthu.html" },
    ];
  },
};

export default nextConfig;
