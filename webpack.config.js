const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpackUtils/webpack.common');

module.exports = env => {
  const envConfig = require(`./webpackUtils/webpack.${env.env}.js`);

  return webpackMerge(commonConfig, envConfig);
};
