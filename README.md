# bundle-size

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
// { modules: 'react,react-dom',
//   bundle: '675.74 kB',
//   min: '353.59 kB',
//   minGzip: '102.81 kB' }
```

## License

MIT
