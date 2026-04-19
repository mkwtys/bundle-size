import { describe, it, expect } from 'vitest';
import bundleSize from '.';

describe('index', () => {
  it('returns formatted string output by default', async () => {
    const result = await bundleSize(['./__tests__/fixtures/noop'], {});
    expect(typeof result).toBe('string');
  });

  it('returns json when reporter is json', async () => {
    const result = await bundleSize(['./__tests__/fixtures/noop'], { reporter: 'json' });
    expect(result).toHaveLength(1);
    const item = result[0];
    expect(typeof item.packages).toBe('string');
    expect(typeof item.bundle).toBe('string');
    expect(typeof item.min).toBe('string');
    expect(typeof item.gzip).toBe('string');
    expect(item).not.toHaveProperty('env');
  });

  it('applies prettyBytes formatting to bundle sizes', async () => {
    const result = await bundleSize(['./__tests__/fixtures/noop'], { reporter: 'json' });
    const item = result[0];
    expect(item.bundle).toMatch(/\d/);
    expect(item.bundle).toMatch(/B/);
    expect(item.gzip).toMatch(/\d/);
    expect(item.gzip).toMatch(/B/);
  });

  it('includes env in result when env option is given', async () => {
    const result = await bundleSize(['./__tests__/fixtures/noop'], {
      reporter: 'json',
      env: 'production',
    });
    expect(result).toHaveLength(2);
    expect(result[0]).not.toHaveProperty('env');
    expect(result[1].env).toBe('production');
  });

  it('handles multiple envs', async () => {
    const result = await bundleSize(['./__tests__/fixtures/noop'], {
      reporter: 'json',
      env: ['development', 'production'],
    });
    expect(result).toHaveLength(3);
    expect(result[0]).not.toHaveProperty('env');
    expect(result[1].env).toBe('development');
    expect(result[2].env).toBe('production');
  });
});
