const baseConfig = require('../config/webpack.config.js');

//dont need stories path if you have your stories inside your //components folder
module.exports = (webpackEnv) => {
  const config = baseConfig('development');
  webpackEnv.config.module.rules.splice(2, 1);
  webpackEnv.config.resolve.extensions.push('.tsx');
  webpackEnv.config.resolve.alias = {
    ...webpackEnv.config.resolve.alias,
    ...config.resolve.alias
  };
  webpackEnv.config.module.rules = [
    ...webpackEnv.config.module.rules,
    config.module.rules[2].oneOf[1],
    config.module.rules[2].oneOf[4],
  ]

  return webpackEnv.config;
};
