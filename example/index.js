'use strict';

const bundleSize = require('../lib/');

bundleSize(['react', 'react-dom'], { env: ['development', 'production'] }).then((results) => {
  console.log(results);
});
// [ { packages: 'react,react-dom',
//     bundle: '714.04 kB',
//     min: '380.71 kB',
//     gzip: '108.66 kB' },
//   { packages: 'react,react-dom',
//     bundle: '703.73 kB',
//     min: '354.37 kB',
//     gzip: '105.38 kB',
//     env: 'development' },
//   { packages: 'react,react-dom',
//     bundle: '703.33 kB',
//     min: '282.78 kB',
//     gzip: '81.18 kB',
//     env: 'production' } ]
