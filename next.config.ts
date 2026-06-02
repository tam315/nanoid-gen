import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  turbopack: {
    root: process.cwd(),
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
