const path = require('path');
const webpack = require('webpack');

const config = {
  entry: ['react-hot-loader/patch', './src/'],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
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
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
    alias: { styles: path.resolve(__dirname, '..', 'styles') }
  },
  plugins: [new webpack.ProgressPlugin(), new webpack.NoEmitOnErrorsPlugin()]
};

module.exports = config;
