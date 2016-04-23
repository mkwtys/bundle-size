'use strict';

const bundleBytes = require('./bundle-bytes');
const prettyBytes = require('pretty-bytes');

module.exports = (files, options) => {
  const modules = Array.isArray(files) ? files : [files];

  return bundleBytes(modules, options)
    .then((data) => {
      const results = {
        modules: modules.join(),
        bundle: prettyBytes(data.bundle),
        min: prettyBytes(data.min),
        minGzip: prettyBytes(data.minGzip)
      };
      return results;
    });
};
