const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['react-hot-loader/patch', './lib/'],
  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
    alias: { styles: path.resolve(__dirname, '../styles') },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      meta: {
        'msapplication-config': '/public/browserconfig.xml',
        'msapplication-TileColor': '#00aba9',
        'theme-color': '#000000',
        Description: "Mike Fenwick's personal website.",
        viewport: 'width=device-width, initial-scale=1, user-scalable=yes',
      },
      favicon: 'public/favicon.ico',
    }),
    new webpack.ProgressPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = config;
