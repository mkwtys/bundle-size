[![Build Status](https://travis-ci.org/mkwtys/bundle-size.svg?branch=master)](https://travis-ci.org/mkwtys/bundle-size)
[![Coverage Status](https://coveralls.io/repos/github/mkwtys/bundle-size/badge.svg?branch=master)](https://coveralls.io/github/mkwtys/bundle-size?branch=master)
[![Code Climate](https://codeclimate.com/github/mkwtys/bundle-size/badges/gpa.svg)](https://codeclimate.com/github/mkwtys/bundle-size)

# bundle-size

[![Greenkeeper badge](https://badges.greenkeeper.io/mkwtys/bundle-size.svg)](https://greenkeeper.io/)

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

// react@15.2.1, redux@3.5.2
//
// env          bundle     minify    gzip
// --           155.65 kB  78.43 kB  24.78 kB
// development  150.89 kB  71.58 kB  23.54 kB
// production   150.81 kB  57.87 kB  18.28 kB
```

## License

MIT © [mkwtys](https://github.com/mkwtys)
