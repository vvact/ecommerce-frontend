/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // ✅ allow all Cloudinary images
  },
};

module.exports = nextConfig;
