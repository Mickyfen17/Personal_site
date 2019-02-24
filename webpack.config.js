const commonConfig = require('./webpackUtils/webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = env => {
  const envConfig = require(`./webpackUtils/webpack.${env.env}.js`);

  return webpackMerge(commonConfig, envConfig);
};
