const assert = require('assert');
const bundleBytes = require('../lib/bundle-bytes');

describe('bundle-bytes', function() {
  it('noop - browser-pack code only', function() {
    return bundleBytes('./test/noop').then(function(results) {
      assert(Array.isArray(results.packages));
      assert.deepEqual(results.packages, [ './test/noop' ]);
      assert(results.bundle);
      assert(results.min);
      assert(results.gzip);
    });
  });

  it('noop - env:development', function() {
    return bundleBytes('./test/noop', 'development').then(function(results) {
      assert(Array.isArray(results.packages));
      assert.deepEqual(results.packages, [ './test/noop' ]);
      assert(results.bundle);
      assert(results.min);
      assert(results.gzip);
      assert.equal(results.env, 'development');
    });
  });

  it('noop - env:production', function() {
    return bundleBytes('./test/noop', 'production').then(function(results) {
      assert(Array.isArray(results.packages));
      assert.deepEqual(results.packages, [ './test/noop' ]);
      assert(results.bundle);
      assert(results.min);
      assert(results.gzip);
      assert.equal(results.env, 'production');
    });
  });
});
