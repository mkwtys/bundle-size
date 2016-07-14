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
```

## Contributing

1. Fork it!
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request :D

## License

MIT
