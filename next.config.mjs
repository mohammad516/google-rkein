/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protocol for the remote image URLs
        hostname: "upload.wikimedia.org", // Hostname for Wikimedia Commons
        pathname: "**", // Match all pathnames under Wikimedia Commons
      },
    ],
  },
};

export default nextConfig;

