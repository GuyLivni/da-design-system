const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('rollup-plugin-node-resolve');

const twindConfig = {
  name: 'Da-design-system',
  extensions: ['.ts', '.tsx'],
};

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      peerDepsExternal(),
      resolve({ extensions: twindConfig.extensions }),
      commonjs(),
      babel({
        extensions: twindConfig.extensions,
        include: ['src/**/*'],
        exclude: 'node_modules/**',
      })
    );
    return config;
  },
};
