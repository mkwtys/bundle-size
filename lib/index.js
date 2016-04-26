'use strict';

const bundleBytes = require('./bundle-bytes');
const prettyBytes = require('pretty-bytes');

module.exports = (packages, options) => {
  const files = Array.isArray(packages) ? packages : [packages];
  const results = [];
  return bundleBytes(packages)
    .then(value => results.push(value))
    .then(() => bundleBytes(packages, 'development'))
    .then(value => results.push(value))
    .then(() => bundleBytes(packages, 'production'))
    .then(value => results.push(value))
    .then(() => {
      return results.map((result) => {
        const data = {
          packages: result.packages.join(),
          bundle: prettyBytes(result.bundle),
          min: prettyBytes(result.min),
          gzip: prettyBytes(result.gzip)
        }
        if (result.env) {
          data.env = result.env
        }
        return data;
      });
    });
};
