'use strict';

const bundleSize = require('../');

bundleSize('react').then((results) => {
  console.log(results);
});
//-> { modules: 'react', bundle: '116.39 kB' }
