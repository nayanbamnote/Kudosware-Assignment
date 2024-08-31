/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['uploadthing.com', 'utfs.io'],
      },
      reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
