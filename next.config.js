const { i18n } = require('./next-i18next.config')

module.exports = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '**'
      }
    ],
  },
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    config.resolve.fallback = { fs: false }

    return config
  },
}