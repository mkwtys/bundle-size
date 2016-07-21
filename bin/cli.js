#! /usr/bin/env node
'use strict';

const minimist = require("minimist");
const ora = require('ora');
const pkg = require("../package.json");
const bundleSize = require("../lib");

const spinner = ora(`bundle packages`);
const argv = minimist(process.argv.slice(2), {
  boolean: [
    "help",
    "version"
  ],
  string: [
    "env",
    "reporter"
  ],
  alias: {
    "e": "env",
    "h": "help",
    "r": "reporter",
    "v": "version"
  },
  default: {
    "help": false,
    "version": false
  }
});

function main() {
  spinner.start();
  bundleSize(argv._, {
    env: argv.env,
    reporter: argv.reporter
  }).then((value) => {
    spinner.stop();
    console.log(value);
  });
}

function showHelp() {
  console.log(`
${pkg.description}

Usage
  ${Object.keys(pkg.bin)[0]} [packages] [options]

Options
  -e, --env         set NODE_ENV
  -h, --help        show help
  -r, --reporter    output style
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
