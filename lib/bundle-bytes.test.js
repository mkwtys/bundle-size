import { describe, it, expect } from 'vitest';
import bundleBytes from './bundle-bytes';

describe('bundle-bytes', () => {
  it('noop - browser-pack code only', async () => {
    const results = await bundleBytes('./tests/fixtures/noop');
    expect(results.packages).toEqual(['./tests/fixtures/noop']);
    expect(results.bundle).toBeTruthy();
    expect(results.min).toBeTruthy();
    expect(results.gzip).toBeTruthy();
  });

  it('noop - env:development', async () => {
    const results = await bundleBytes('./tests/fixtures/noop', 'development');
    expect(results.packages).toEqual(['./tests/fixtures/noop']);
    expect(results.bundle).toBeTruthy();
    expect(results.min).toBeTruthy();
    expect(results.gzip).toBeTruthy();
    expect(results.env).toBe('development');
  });

  it('noop - env:production', async () => {
    const results = await bundleBytes('./tests/fixtures/noop', 'production');
    expect(results.packages).toEqual(['./tests/fixtures/noop']);
    expect(results.bundle).toBeTruthy();
    expect(results.min).toBeTruthy();
    expect(results.gzip).toBeTruthy();
    expect(results.env).toBe('production');
  });

  it('multi files', async () => {
    const results = await bundleBytes([
      './tests/fixtures/noop',
      './tests/fixtures/noop2',
    ]);
    expect(results.packages).toEqual([
      './tests/fixtures/noop',
      './tests/fixtures/noop2',
    ]);
    expect(results.bundle).toBeTruthy();
    expect(results.min).toBeTruthy();
    expect(results.gzip).toBeTruthy();
  });
});
