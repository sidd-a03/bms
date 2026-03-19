/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/db"],
  experimental: {
    // This helps Next.js resolve packages that use modern ESM
    extensionAlias: {
      ".js": [".ts", ".tsx", ".js", ".jsx"],
    },
  },
};

export default nextConfig;
