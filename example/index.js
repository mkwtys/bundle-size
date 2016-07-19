'use strict';

const bundleSize = require('../lib/');

bundleSize(['react', 'redux'], { env: ['development', 'production'] }).then((results) => {
  console.log(results);
});
