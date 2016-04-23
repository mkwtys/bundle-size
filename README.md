# bundle-size

Show bundle file size of npm modules

## Install

```sh
$ npm install --save bundle-size
```

## Usage

```js
const bundleSize = require('bundle-size');

bundleSize('react').then((results) => {
  console.log(results);
});
//-> { modules: 'react', bundle: '116.39 kB' }
```
