import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress all responses with gzip
  compress: true,

  // Optimize images: serve WebP/AVIF automatically, cache aggressively
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Production-only: remove console.log calls from JS bundle
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Aggressive HTTP caching for static assets
  async headers() {
    return [
      {
        source: "/(.*)\\.(png|jpg|jpeg|gif|webp|avif|svg|ico|woff2|woff|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
