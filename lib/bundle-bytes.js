'use strict';

const browserify = require('browserify');
const uglify = require('uglify-js');

module.exports = (files, options) => {
  const modules = Array.isArray(files) ? files : [files];
  let data = '';
  let bytes = 0;
  return new Promise((resolve, reject) => {
    const bundler = browserify(options);

    modules.forEach((file) => {
      bundler.require(file);
    });

    bundler.bundle()
      .on('data', function (buf) {
        data += buf.toString();
        bytes += buf.toString().length;
      })
      .on('end', function () {
        const results = {
          modules: modules,
          bundle: bytes,
          minify: uglify.minify(data.toString(), {fromString: true, mangle: false}).code.length
        };
        resolve(results);
      });
  });
};
