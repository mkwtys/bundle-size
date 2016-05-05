# bundle-size [![Build Status](https://travis-ci.org/mkwtys/bundle-size.svg?branch=master)](https://travis-ci.org/mkwtys/bundle-size)

Show bundle file size of npm packages

## Installation

```sh
$ npm install bundle-size
```

## Usage

```js
const bundleSize = require('bundle-size');

bundleSize(['react', 'react-dom'], { env: ['development', 'production'] }).then((results) => {
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
```

## CLI

```sh
$ bundle-size --help
Show bundle file size of npm packages

Usage
  bundle-size [packages]

Options
  -e, --env         set NODE_ENV
  -h, --help        show help
  -r, --reporter    output style
  -v, --version     print version
```

### Example

```sh
bundle-size react
bundle-size react --env development
bundle-size react -e development -e production
```

## License

MIT
