# bundle-size [![Build Status](https://travis-ci.org/mkwtys/bundle-size.svg?branch=master)](https://travis-ci.org/mkwtys/bundle-size)

Show bundle file size of npm modules

## Installation

```sh
$ npm install bundle-size
```

## Usage

```js
const bundleSize = require('bundle-size');

bundleSize('react', 'react-dom').then((results) => {
  console.log(results);
});
// [ { modules: 'react,react-dom',
//     bundle: '675.74 kB',
//     min: '353.59 kB',
//     gzip: '102.81 kB' },
//   { modules: 'react,react-dom',
//     bundle: '666.74 kB',
//     min: '333.66 kB',
//     gzip: '100.11 kB',
//     env: 'development' },
//   { modules: 'react,react-dom',
//     bundle: '666.42 kB',
//     min: '275.56 kB',
//     gzip: '78.81 kB',
//     env: 'production' } ]
```

## License

MIT
