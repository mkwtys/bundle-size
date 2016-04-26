'use strict';

const bundleSize = require('../lib/');

bundleSize(['react', 'react-dom']).then((results) => {
  console.log(results);
});
// [ { packages: 'react,react-dom',
//     bundle: '675.74 kB',
//     min: '353.59 kB',
//     gzip: '102.81 kB' },
//   { packages: 'react,react-dom',
//     bundle: '666.74 kB',
//     min: '333.66 kB',
//     gzip: '100.11 kB',
//     env: 'development' },
//   { packages: 'react,react-dom',
//     bundle: '666.42 kB',
//     min: '275.56 kB',
//     gzip: '78.81 kB',
//     env: 'production' } ]
