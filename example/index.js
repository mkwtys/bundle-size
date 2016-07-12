'use strict';

const bundleSize = require('../lib/');

bundleSize(['react', 'react-dom'], { env: ['development', 'production'] }).then((results) => {
  console.log(results);
});
// [ { packages: 'react, react-dom',
//     bundle: '715.52 kB',
//     min: '381.02 kB',
//     gzip: '108.47 kB' },
//   { packages: 'react, react-dom',
//     bundle: '704.9 kB',
//     min: '355.09 kB',
//     gzip: '105.23 kB',
//     env: 'development' },
//   { packages: 'react, react-dom',
//     bundle: '704.53 kB',
//     min: '287.97 kB',
//     gzip: '82.25 kB',
//     env: 'production' } ]
