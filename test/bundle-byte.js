const assert = require('assert');
const bundleBytes = require('../lib/bundle-bytes');

describe('bundle-bytes', function() {
  it('noop - browser-pack code only', function() {
    return bundleBytes('./example/noop').then(function(bytes) {
      assert.equal(bytes, 566);
    });
  });
});
