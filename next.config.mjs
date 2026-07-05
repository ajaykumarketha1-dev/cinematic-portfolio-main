/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: 'standalone',
  images: {
    qualities: [75, 80, 95, 100],
  },
};

export default nextConfig;
