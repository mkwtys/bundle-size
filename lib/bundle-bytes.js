'use strict';

const browserify = require('browserify');
const envify = require('envify/custom');
const uglify = require('uglify-js');
const zlib = require('zlib');

function bundle(files, env) {
  const modules = Array.isArray(files) ? files : [files];
  let data = '';

  return new Promise((resolve, reject) => {
    const bundler = browserify();

    modules.forEach((file) => {
      bundler.require(file);
    });

    if (env) {
      process.env.NODE_ENV = env;
      bundler.transform(envify({
        NODE_ENV: env
      }));
    }

    bundler.bundle()
      .on('data', function (buf) {
        data += buf.toString();
      })
      .on('end', function () {
        const minify = uglify.minify(data, {
          fromString: true,
          mangle: false,
          compress: {
            dead_code: true
          }
        });
        const results = {
          modules: modules,
          bundle: data.length,
          min: minify.code.length
        };
        if (env) {
          results.env = env;
        }
        zlib.gzip(minify.code, (err, buffer) => {
          if (err) {
            console.error(err);
          }
          results.gzip = buffer.toString('base64').length;
          resolve(results);
        });
      });
  });
}

module.exports = (files, options) => {
  return new Promise((resolve, reject) => {
    const results = [];
    bundle(files)
      .then(value => results.push(value))
      .then(() => bundle(files, 'development'))
      .then(value => results.push(value))
      .then(() => bundle(files, 'production'))
      .then(value => results.push(value))
      .then(() => {
        resolve(results);
      });
  });
};
