// const { i18n } = require('./next-i18next.config')

// module.exports = {
//   i18n,
// }

const { i18n } = require('./next-i18next.config')

module.exports = {
  // reactStrictMode: true,
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