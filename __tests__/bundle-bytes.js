const assert = require("assert");
const bundleBytes = require("../lib/bundle-bytes");

describe("bundle-bytes", function () {
  it("noop - browser-pack code only", function () {
    return bundleBytes("./__tests__/fixtures/noop").then(function (results) {
      assert(Array.isArray(results.packages));
      assert.deepEqual(results.packages, ["./__tests__/fixtures/noop"]);
      assert(results.bundle);
      assert(results.min);
      assert(results.gzip);
    });
  });

  it("noop - env:development", function () {
    return bundleBytes("./__tests__/fixtures/noop", "development").then(
      function (results) {
        assert(Array.isArray(results.packages));
        assert.deepEqual(results.packages, ["./__tests__/fixtures/noop"]);
        assert(results.bundle);
        assert(results.min);
        assert(results.gzip);
        assert(results.env === "development");
      }
    );
  });

  it("noop - env:production", function () {
    return bundleBytes("./__tests__/fixtures/noop", "production").then(
      function (results) {
        assert(Array.isArray(results.packages));
        assert.deepEqual(results.packages, ["./__tests__/fixtures/noop"]);
        assert(results.bundle);
        assert(results.min);
        assert(results.gzip);
        assert(results.env === "production");
      }
    );
  });

  it("multi files", function () {
    return bundleBytes([
      "./__tests__/fixtures/noop",
      "./__tests__/fixtures/noop2",
    ]).then(function (results) {
      assert(Array.isArray(results.packages));
      assert.deepEqual(results.packages, [
        "./__tests__/fixtures/noop",
        "./__tests__/fixtures/noop2",
      ]);
      assert(results.bundle);
      assert(results.min);
      assert(results.gzip);
    });
  });
});
