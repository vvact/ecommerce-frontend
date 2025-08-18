/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "/dizhnvo43/**", // your cloud name folder
      },
    ],
  },
};

module.exports = nextConfig;
