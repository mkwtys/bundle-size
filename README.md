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
```

## Contributing

1. Fork it!
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request :D

## License

MIT
