/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,

    //for production
    trailingSlash: true,
    reactStrictMode: true,
    // distDir: 'docs',
    // output: 'export',
    // images: {
    //   unoptimized: true,
    // },
  },
};

module.exports = nextConfig;
