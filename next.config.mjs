/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["res.cloudinary.com", "github.com"],
  },
};

export default nextConfig;
