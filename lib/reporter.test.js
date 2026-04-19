import { describe, it, expect } from 'vitest';
import reporter from './reporter';

describe('reporter', () => {
  it('no data', () => {
    expect(() => reporter()).toThrow();
  });

  it('empty', () => {
    expect(typeof reporter([])).toBe('string');
  });

  function fixtureTest(data, expectedLines) {
    expect(reporter(data)).toBe(expectedLines.join('\n'));
  }

  it('example', () => {
    fixtureTest(
      [
        {
          packages: 'react@15.2.1, redux@3.5.2',
          bundle: '155.65 kB',
          min: '78.43 kB',
          gzip: '24.78 kB',
        },
        {
          packages: 'react@15.2.1, redux@3.5.2',
          bundle: '150.89 kB',
          min: '71.58 kB',
          gzip: '23.54 kB',
          env: 'development',
        },
        {
          packages: 'react@15.2.1, redux@3.5.2',
          bundle: '150.81 kB',
          min: '57.87 kB',
          gzip: '18.28 kB',
          env: 'production',
        },
      ],
      [
        'react@15.2.1, redux@3.5.2',
        '',
        'env          bundle     minify    gzip      ',
        '--           155.65 kB  78.43 kB  24.78 kB  ',
        'development  150.89 kB  71.58 kB  23.54 kB  ',
        'production   150.81 kB  57.87 kB  18.28 kB  ',
        '',
      ]
    );
  });

  it('one package', () => {
    fixtureTest(
      [{ packages: 'packages', bundle: 0, min: 0, gzip: 0 }],
      [
        'packages',
        '',
        'env  bundle  minify  gzip  ',
        '--   0       0       0     ',
        '',
      ]
    );
  });

  it('multi package', () => {
    fixtureTest(
      [{ packages: 'packages, packages2', bundle: 0, min: 0, gzip: 0 }],
      [
        'packages, packages2',
        '',
        'env  bundle  minify  gzip  ',
        '--   0       0       0     ',
        '',
      ]
    );
  });

  it('envs', () => {
    fixtureTest(
      [
        { packages: 'packages', bundle: 0, min: 0, gzip: 0 },
        { packages: 'packages', bundle: 0, min: 0, gzip: 0, env: 'development' },
        { packages: 'packages', bundle: 0, min: 0, gzip: 0, env: 'production' },
      ],
      [
        'packages',
        '',
        'env          bundle  minify  gzip  ',
        '--           0       0       0     ',
        'development  0       0       0     ',
        'production   0       0       0     ',
        '',
      ]
    );
  });
});
