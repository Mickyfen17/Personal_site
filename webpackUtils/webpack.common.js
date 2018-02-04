const path = require('path');
const webpack = require('webpack');

const config = {
  entry: ['react-hot-loader/patch', './lib/index.js'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../', 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      { test: /\.svg$/, loader: 'svg-url-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    hot: true,
  },
};

module.exports = config;
