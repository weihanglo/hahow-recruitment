const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    reader: path.resolve('src', 'index.js')
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hahow Recruitment',
      filename: path.resolve('dist', 'index.html'),
      template: path.resolve('src', 'index.html'),
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        removeComments: true
      }
    })
  ],
  devtool: isProd ? 'source-map' : 'inline-source-map'
}
