# bundle-size [![Build Status](https://travis-ci.org/mkwtys/bundle-size.svg?branch=master)](https://travis-ci.org/mkwtys/bundle-size)

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
  -r, --reporter    output style
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

## Contributing

1. Fork it!
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request :D

## License

MIT
