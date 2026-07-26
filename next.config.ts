import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static HTML at build time (best for SEO + Vercel)
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
