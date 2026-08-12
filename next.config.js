/** @type {import('next').NextConfig} */
const repositoryName = "Portfolio";
const isProductionBuild = process.env.NODE_ENV === "production";
const basePath = isProductionBuild ? `/${repositoryName}` : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: isProductionBuild
      ? `https://niloy-datta.github.io/${repositoryName}`
      : "http://localhost:2089",
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
