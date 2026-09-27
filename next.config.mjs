// Static export so the site can be hosted for free on GitHub Pages.
// BASE_PATH is set automatically by the GitHub Actions workflow
// (empty for <username>.github.io repos, "/<repo-name>" otherwise).
const basePath = process.env.BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
