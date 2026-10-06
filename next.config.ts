import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/bonvital": ["./src/app/bonvital/dashboard.html"],
  },
  async rewrites() {
    return {
      // Run before filesystem/app routes so V2 becomes the homepage.
      beforeFiles: [
        { source: "/", destination: "/home.html" },
        { source: "/en", destination: "/home-en.html" },
      ],
      afterFiles: [
        { source: "/rsnew", destination: "/rsnew.html" },
        { source: "/sauska", destination: "/sauska.html" },
        { source: "/starthu", destination: "/starthu.html" },
        { source: "/startro", destination: "/startro.html" },
        { source: "/2027", destination: "/2027.html" },
        { source: "/2027bp", destination: "/2027bp.html" },
        { source: "/2027nyar", destination: "/2027nyar/index.html" },
        { source: "/ih2026", destination: "/ih2026.html" },
        { source: "/roomlytics", destination: "/roomlytics.html" },
        { source: "/roomlytics-plan", destination: "/roomlytics-plan.html" },
        { source: "/v2", destination: "/v2.html" },
        { source: "/galbusz", destination: "/galbusz/index.html" },
        { source: "/galbusz100", destination: "/galbusz100/index.html" },
        { source: "/galbusz101", destination: "/galbusz101/index.html" },
        { source: "/galbusz102", destination: "/galbusz102/index.html" },
        { source: "/galbusz103", destination: "/galbusz103/index.html" },
        { source: "/galbusz105", destination: "/galbusz105/index.html" },
        { source: "/rs2027", destination: "/rs2027.html" },
        { source: "/romania", destination: "/romania.html" },
        { source: "/metaads", destination: "/metaads/meta-ads-booster.html" },
        { source: "/metacontent", destination: "/metacontent/content-blueprint.html" },
      ],
    };
  },
};

export default nextConfig;
