/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  // // process.env.NEXT_PUBLIC_SERVER,
  // '77.232.128.234'
  // experimental: {
  //   serverActions: true,
  // },
  // serverActions: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        // hostname: '77.232.128.234',
        hostname: process.env.NEXT_PUBLIC_SERVER,
        port: '1337',
        // pathname: "/image/upload/**",
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
    //for production
    // trailingSlash: true,
    // reactStrictMode: true,
    // distDir: 'docs',
    // output: 'export',
    // images: {
    //   unoptimized: true,
    // },
  },
};

module.exports = nextConfig;
