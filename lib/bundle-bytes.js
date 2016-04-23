'use strict';

const browserify = require('browserify');
const through = require('through2');

module.exports = (files, options) => {
  const modules = Array.isArray(files) ? files : [files];
  let bytes = 0;
  return new Promise((resolve, reject) => {
    const bundler = browserify();
    const bytesStream = through(
      function (chunk, enc, callback) {
        this.push(chunk);
        callback();
      }
    )
    .on('data', function (data) {
      bytes += data.toString().length;
    })
    .on('end', function () {
      resolve(bytes);
    });

    modules.forEach((file) => {
      bundler.require(file);
    });

    bundler.bundle().pipe(bytesStream);
  });
};
