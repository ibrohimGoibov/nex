import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '157.180.29.248',
        port: '5505',
        pathname: '/api/images/**',
      },
    ],
  },
};

export default nextConfig;