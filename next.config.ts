/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dizhnvo43/**", // your Cloudinary cloud name/folder
      },
    ],
  },
};

module.exports = nextConfig;
