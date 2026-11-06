/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    // The exported site is hosted without a Next.js image optimization server.
    unoptimized: true,
  },
};

export default config;
