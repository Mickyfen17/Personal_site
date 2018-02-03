const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const config = {
  devtool: 'source-map',
  plugins: [
    new UglifyJsWebpackPlugin({
      sourceMap: true,
    }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};

module.exports = config;
