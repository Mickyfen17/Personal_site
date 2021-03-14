const { merge } = require('webpack-merge');
const commonConfig = require('./webpackUtils/webpack.common');

module.exports = ({ env }) => {
  const envConfig = require(`./webpackUtils/webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};
