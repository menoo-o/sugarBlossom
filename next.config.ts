import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 experimental: {
    turbo: {
      // ...
    },
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloud.appwrite.io", // Appwrite bucket domain
        port: "", // No specific port required
        pathname: "/v1/storage/buckets/**/files/**/view", // Path pattern for Appwrite images
      },
    ],
  },
};

export default nextConfig;
