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
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*).(jpg|jpeg|png|webp|svg|gif|mp4|webm)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*).(woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  allowedDevOrigins: [
    "local-origin.dev",
    "*.local-origin.dev",
    "mycareersarthi.com",
    "*.mycareersarthi.com",
  ],
};

export default nextConfig;
