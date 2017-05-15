[![Build Status](https://travis-ci.org/mkwtys/bundle-size.svg?branch=master)](https://travis-ci.org/mkwtys/bundle-size)
[![codecov](https://codecov.io/gh/mkwtys/bundle-size/branch/master/graph/badge.svg)](https://codecov.io/gh/mkwtys/bundle-size)
[![Code Climate](https://codeclimate.com/github/mkwtys/bundle-size/badges/gpa.svg)](https://codeclimate.com/github/mkwtys/bundle-size)

# bundle-size

Show bundle file size of npm packages

## Installation

```sh
$ npm install bundle-size
```

## Usage

### in CLI

```sh
$ bundle-size --help
Show bundle file size of npm packages

Usage
  bundle-size [packages] [options]

Options
  -e, --env         set NODE_ENV
  -h, --help        show help
  -r, --reporter    output style (json)
  -v, --version     print version
```

#### Example:

```sh
bundle-size react
bundle-size react --env development
bundle-size react -e development -e production
```

### in Node.js module

```js
const bundleSize = require('bundle-size');

bundleSize(['react', 'redux'], { env: ['development', 'production'] }).then((results) => {
  console.log(results);
});

// react@15.5.4, redux@3.6.0
//
// env          bundle  minify   gzip
// --           178 kB  89.8 kB  28.2 kB
// development  176 kB  84.2 kB  27.6 kB
// production   176 kB  67 kB    21.2 kB
```

## License

MIT © [mkwtys](https://github.com/mkwtys)
