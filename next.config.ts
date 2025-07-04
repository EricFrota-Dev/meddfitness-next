// next.config.js
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/meddfitness-next" : "",
  assetPrefix: isProd ? "/meddfitness-next/" : "",
  images: { unoptimized: true }, // necessário para GitHub Pages :contentReference[oaicite:4]{index=4}
};

module.exports = nextConfig;
