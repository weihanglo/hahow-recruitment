const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    reader: path.resolve('src', 'index.js')
  },
  output: {
    path: path.resolve('dist'),
    filename: isProd ? '[name].[chunkhash:10].js' : '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
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
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/heroes/**/*.js': {
        target: 'http://0.0.0.0:8080',
        pathRewrite: { '^/heroes': '' }
      },
      '/heroes/**/*.css': {
        target: 'http://0.0.0.0:8080',
        pathRewrite: { '^/heroes': '' }
      }
    }
  },
  devtool: isProd ? 'source-map' : 'inline-source-map'
}
