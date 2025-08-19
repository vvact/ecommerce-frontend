/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        domains: ['res.cloudinary.com'], // add your Cloudinary domain
        pathname: "/dizhnvo43/**",
      },
    ],
  },
};

module.exports = nextConfig;
