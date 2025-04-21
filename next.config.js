/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add webpack configuration to handle JSON imports
  webpack(config) {
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
    })
    return config
  },
}

module.exports = nextConfig
