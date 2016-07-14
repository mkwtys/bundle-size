'use strict';

const bundleSize = require('../lib/');

bundleSize(['react', 'redux'], { env: ['development', 'production'] }).then((results) => {
  console.log(results);
});
// [ { packages: 'react@15.2.1, redux@3.5.2',
//     bundle: '155.65 kB',
//     min: '78.43 kB',
//     gzip: '24.78 kB' },
//   { packages: 'react@15.2.1, redux@3.5.2',
//     bundle: '150.89 kB',
//     min: '71.58 kB',
//     gzip: '23.54 kB',
//     env: 'development' },
//   { packages: 'react@15.2.1, redux@3.5.2',
//     bundle: '150.81 kB',
//     min: '57.87 kB',
//     gzip: '18.28 kB',
//     env: 'production' } ]
