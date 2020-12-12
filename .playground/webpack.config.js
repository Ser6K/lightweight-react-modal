const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const outputPath = path.resolve(__dirname, 'dist')

const config = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    index: 'index.html',
    contentBase: outputPath,
    stats: 'errors-only',
    open: 'Google chrome',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = config
