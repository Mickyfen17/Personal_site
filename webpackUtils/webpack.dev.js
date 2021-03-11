const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      meta: {
        'msapplication-config': '/public/browserconfig.xml',
        'msapplication-TileColor': '#00aba9',
        'theme-color': '#000000',
        Description: "Mike Fenwick's personal website.",
        viewport: 'width=device-width, initial-scale=1, user-scalable=yes'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    open: true
  }
};

module.exports = config;
