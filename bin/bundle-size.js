#! /usr/bin/env node

import minimist from 'minimist';
import ora from 'ora';
import { createRequire } from 'module';
import bundleSize from '../lib/index.js';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const argv = minimist(process.argv.slice(2), {
  boolean: [
    'help',
    'version'
  ],
  string: [
    'env',
    'reporter'
  ],
  alias: {
    'e': 'env',
    'h': 'help',
    'r': 'reporter',
    'v': 'version'
  },
  default: {
    'help': false,
    'version': false
  }
});

async function main() {
  const spinner = ora('bundle packages').start();
  try {
    const value = await bundleSize(argv._, {
      env: argv.env,
      reporter: argv.reporter
    });
    spinner.stop();
    console.log(value);
  } catch (err) {
    spinner.stop();
    console.error(err);
    process.exit(1);
  }
}

function showHelp() {
  console.log(`
${pkg.description}

Usage
  ${Object.keys(pkg.bin)[0]} [packages] [options]

Options
  -e, --env         set NODE_ENV
  -h, --help        show help
  -r, --reporter    output style (json)
  -v, --version     print version
`);
}

function showVersion() {
  console.log(pkg.version);
}

if (argv.help) {
  showHelp();
}

if (argv.version) {
  showVersion();
}

if (argv._.length > 0) {
  main();
}
