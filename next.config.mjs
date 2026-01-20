/** @type {import('next').NextConfig} */
const isCI = process.env.CI === "true";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/blog-images/**",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "5000",
        pathname: "/blog-images/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "5000",
        pathname: "/blog-images/**",
      },
      {
        protocol: "https",
        hostname: "mycareersarthi.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.mycareersarthi.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
