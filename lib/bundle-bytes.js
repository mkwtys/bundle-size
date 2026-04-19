import browserify from 'browserify';
import envify from 'envify/custom.js';
import uglify from 'uglify-js';
import zlib from 'zlib';

export default (packages, env) => {
  const files = Array.isArray(packages) ? packages : [packages];
  let data = '';
  let pkgIds = files.slice();

  return new Promise((resolve, reject) => {
    const bundler = browserify();

    files.forEach((file, i) => {
      bundler.require(file);
      bundler.on('package', (pkg) => {
        if (pkg.name === file) {
          pkgIds[i] = pkg._id;
        }
      });
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
          mangle: false,
          compress: {
            dead_code: true
          }
        });
        const results = {
          packages: pkgIds,
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
