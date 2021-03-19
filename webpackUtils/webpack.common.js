const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config = {
  entry: './src/index',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: { loader: 'ts-loader', options: { transpileOnly: true } }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.scss', '.css'],
    alias: { styles: path.resolve(__dirname, '..', 'styles') }
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = config;
