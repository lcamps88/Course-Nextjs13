/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig
// const withPlugins = require('next-compose-plugins')
// const withImages = require('next-images')
// const webpack = require('webpack')
// const path = require('path')

// module.exports = withPlugins([[withImages]], {
//   images: {
//     disableStaticImages: true,
//   },
//   webpack(config, options) {
//     config.resolve.modules.push(path.resolve('./'))
//     return config
//   },
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   serverRuntimeConfig: {
//     NODE_ENV: process.env.NODE_ENV,
//   },
//   publicRuntimeConfig: {
//     MONGODB_URI: process.env.MONGODB_URI,
//     GOOGLE_ID: process.env.GOOGLE_ID,
//     GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,
//     NEXTAUTH_URL:process.env.NEXTAUTH_URL,
//     NEXTAUTH_URL_INTERNAL:process.env.NEXTAUTH_URL_INTERNAL,
//     NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,
//   },
// })
