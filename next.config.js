/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
};

module.exports = nextConfig;
