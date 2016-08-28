'use strict';

const bundleBytes = require('./bundle-bytes');
const prettyBytes = require('pretty-bytes');
const reporter = require('./reporter');

module.exports = (packages, options) => {
  const results = [];
  let envs = [];

  if (options && options.env) {
    envs = Array.isArray(options.env) ? options.env : [options.env];
  }

  return bundleBytes(packages)
    .then(value => results.push(value))
    .then(() => {
      let promise;

      envs.map((env) => {
        if (!promise) {
          promise = bundleBytes(packages, env);
        } else {
          promise = promise
            .then(value => results.push(value))
            .then(() => bundleBytes(packages, env));
        }
      });

      if (!promise) {
        promise = Promise.resolve();
      }

      return promise;
    })
    .then(value => {
      if (value) {
        results.push(value);
      }
    })
    .then(() => {
      return results.map((result) => {
        const data = {
          packages: result.packages.join(', '),
          bundle: prettyBytes(result.bundle),
          min: prettyBytes(result.min),
          gzip: prettyBytes(result.gzip)
        };
        if (result.env) {
          data.env = result.env;
        }
        return data;
      });
    })
    .then((value) => {
      if (options.reporter === 'json') {
        return value;
      }

      return reporter(value);
    });
};
