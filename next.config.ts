import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // Applies to all routes
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Enable iframe embedding from anywhere
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Allow requests from any origin (Carrd, etc.)
          },
        ],
      },
    ];
  },
};

export default nextConfig;
