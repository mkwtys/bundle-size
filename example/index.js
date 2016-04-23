'use strict';

const bundleSize = require('../lib/');

bundleSize(['react', 'react-dom']).then((results) => {
  console.log(results);
});
// { modules: 'react,react-dom',
//   bundle: '675.74 kB',
//   min: '353.59 kB',
//   minGzip: '102.81 kB' }
