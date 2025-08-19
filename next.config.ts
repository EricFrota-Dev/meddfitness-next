/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/meddfitness-next" : "",
  assetPrefix: isProd ? "/meddfitness-next" : "",
  trailingSlash: true, // importante para exportação estática
};

module.exports = nextConfig;
