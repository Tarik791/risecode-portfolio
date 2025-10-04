/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // GitHub Pages zahtijeva static export
  output: "export",

  // Ako hostaš na https://USERNAME.github.io/REPO_NAME/
  basePath: "/risecode-portfolio",
  assetPrefix: "/risecode-portfolio/",
};

export default nextConfig;
