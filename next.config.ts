/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "/dizhnvo43/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dizhnvo43/**",
      },
    ],
  },
};

module.exports = nextConfig;
