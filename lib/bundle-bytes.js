'use strict';

const browserify = require('browserify');
const envify = require('envify/custom');
const uglify = require('uglify-js');
const zlib = require('zlib');

module.exports = (packages, env) => {
  const files = Array.isArray(packages) ? packages : [packages];
  let data = '';

  return new Promise((resolve, reject) => {
    const bundler = browserify();

    files.forEach((file) => {
      bundler.require(file);
    });

    if (env) {
      process.env.NODE_ENV = env;
      bundler.transform(envify({
        NODE_ENV: env
      }));
    }

    bundler.bundle()
      .on('data', (buf) => {
        data += buf.toString();
      })
      .on('end', () => {
        const minify = uglify.minify(data, {
          fromString: true,
          mangle: false,
          compress: {
            dead_code: true
          }
        });
        const results = {
          packages: files,
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
};
