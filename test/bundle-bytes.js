const assert = require('assert');
const bundleBytes = require('../lib/bundle-bytes');

describe('bundle-bytes', function() {
  it('noop - browser-pack code only', function() {
    return bundleBytes('./test/noop').then(function(results) {
      assert.deepEqual(results, [
        { modules: [ './test/noop' ], bundle: 609, min: 594, gzip: 484 },
        { modules: [ './test/noop' ], bundle: 609, min: 594, gzip: 484, env: "development" },
        { modules: [ './test/noop' ], bundle: 609, min: 594, gzip: 484, env: "production" }
      ]);
    });
  });
});
