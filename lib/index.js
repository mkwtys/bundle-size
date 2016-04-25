'use strict';

const bundleBytes = require('./bundle-bytes');
const prettyBytes = require('pretty-bytes');

module.exports = (files, options) => {
  const modules = Array.isArray(files) ? files : [files];

  return bundleBytes(modules, options)
    .then((results) => {
      return results.map((result) => {
        const data = {
          modules: result.modules.join(),
          bundle: prettyBytes(result.bundle),
          min: prettyBytes(result.min),
          gzip: prettyBytes(result.gzip)
        }
        if (result.env) {
          data.env = result.env
        }
        return data;
      })
    });
};
