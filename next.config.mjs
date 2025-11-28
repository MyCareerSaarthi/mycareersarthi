/** @type {import('next').NextConfig} */
const isCI = process.env.CI === "true";

const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
