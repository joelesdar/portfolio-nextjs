
module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@emotion/babel-plugin',
      {
        sourceMap: true,
        autoLabel: 'always',
        "labelFormat": "[local]",
        "cssPropOptimization": true
      },
    ],
  ],
};