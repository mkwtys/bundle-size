const assert = require("assert");
const bundleSize = require("../lib");

describe("index", function () {
  it("returns formatted string output by default", function () {
    return bundleSize(["./__tests__/fixtures/noop"], {}).then(function (result) {
      assert(typeof result === "string");
    });
  });

  it("returns json when reporter is json", function () {
    return bundleSize(["./__tests__/fixtures/noop"], {
      reporter: "json",
    }).then(function (result) {
      assert(Array.isArray(result));
      assert.strictEqual(result.length, 1);
      const item = result[0];
      assert(typeof item.packages === "string");
      assert(typeof item.bundle === "string");
      assert(typeof item.min === "string");
      assert(typeof item.gzip === "string");
      assert(!("env" in item));
    });
  });

  it("applies prettyBytes formatting to bundle sizes", function () {
    return bundleSize(["./__tests__/fixtures/noop"], {
      reporter: "json",
    }).then(function (result) {
      const item = result[0];
      assert(/\d/.test(item.bundle), "bundle should contain a number");
      assert(/B/.test(item.bundle), "bundle should contain a byte unit");
      assert(/\d/.test(item.gzip), "gzip should contain a number");
      assert(/B/.test(item.gzip), "gzip should contain a byte unit");
    });
  });

  it("includes env in result when env option is given", function () {
    return bundleSize(["./__tests__/fixtures/noop"], {
      reporter: "json",
      env: "production",
    }).then(function (result) {
      assert.strictEqual(result.length, 2);
      assert(!("env" in result[0]));
      assert.strictEqual(result[1].env, "production");
    });
  });

  it("handles multiple envs", function () {
    return bundleSize(["./__tests__/fixtures/noop"], {
      reporter: "json",
      env: ["development", "production"],
    }).then(function (result) {
      assert.strictEqual(result.length, 3);
      assert(!("env" in result[0]));
      assert.strictEqual(result[1].env, "development");
      assert.strictEqual(result[2].env, "production");
    });
  });
});
