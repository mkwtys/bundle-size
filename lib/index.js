'use strict';

const bundleBytes = require('./bundle-bytes');
const prettyBytes = require('pretty-bytes');

module.exports = (files, options) => {
  const modules = Array.isArray(files) ? files : [files];
  const results = {};

  results.modules = modules.join();

  return bundleBytes(modules, options)
    .then((bytes) => {
      results.bundle = prettyBytes(bytes);
      return results;
    });
};
