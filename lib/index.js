'use strict';

const bundleBytes = require('./bundle-bytes');
const prettyBytes = require('pretty-bytes');

module.exports = (files, options) => {
  const modules = Array.isArray(files) ? files : [files];
  const results = [];
  return bundleBytes(files)
    .then(value => results.push(value))
    .then(() => bundleBytes(files, 'development'))
    .then(value => results.push(value))
    .then(() => bundleBytes(files, 'production'))
    .then(value => results.push(value))
    .then(() => {
      return results.map((value) => {
        const data = {
          modules: value.modules.join(),
          bundle: prettyBytes(value.bundle),
          min: prettyBytes(value.min),
          gzip: prettyBytes(value.gzip)
        }
        if (value.env) {
          data.env = value.env
        }
        return data;
      });
    });
};
