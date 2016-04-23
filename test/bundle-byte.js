const assert = require('assert');
const bundleBytes = require('../lib/bundle-bytes');

describe('bundle-bytes', function() {
  it('noop - browser-pack code only', function() {
    return bundleBytes('./example/noop').then(function(results) {
      assert.deepEqual(results, {
        modules: ['./example/noop'],
        bundle: 566,
        minify: 557
      });
    });
  });
});
