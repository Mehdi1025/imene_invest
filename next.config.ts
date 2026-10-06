import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: import.meta.dirname,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/index.html",
        },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
