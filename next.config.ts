import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/bonvital": ["./src/app/bonvital/dashboard.html"],
  },
  async rewrites() {
    return {
      // Run before filesystem/app routes so V2 becomes the homepage.
      beforeFiles: [
        { source: "/", destination: "/v2.html" },
        { source: "/en", destination: "/v2-en.html" },
      ],
      afterFiles: [
        { source: "/rsnew", destination: "/rsnew.html" },
        { source: "/sauska", destination: "/sauska.html" },
        { source: "/starthu", destination: "/starthu.html" },
        { source: "/startro", destination: "/startro.html" },
        { source: "/2027", destination: "/2027.html" },
        { source: "/2027bp", destination: "/2027bp.html" },
        { source: "/roomlytics", destination: "/roomlytics.html" },
        { source: "/roomlytics-plan", destination: "/roomlytics-plan.html" },
        { source: "/v2", destination: "/v2.html" },
        { source: "/galbusz", destination: "/galbusz/index.html" },
        { source: "/rs2027", destination: "/rs2027.html" },
      ],
    };
  },
};

export default nextConfig;
