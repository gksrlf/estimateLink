const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: false,
    hot: true,
    compress: true,
    port: 8888,
    historyApiFallback: true,
    liveReload: true,
  },
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: function (name) {
                  return [
                    name.replace(/-/g, '-'),
                    // dashesCamelCase
                    name.replace(/-+(\w)/g, (match, firstLetter) => firstLetter.toUpperCase()),
                  ]
                },
              },
            },
          },
        ],
      },
    ],
  },
})
