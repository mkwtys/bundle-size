#! /usr/bin/env node
'use strict';

const minimist = require("minimist");
const pkg = require("../package.json");
const bundleSize = require("../lib");

const argv = minimist(process.argv.slice(2), {
  boolean: [
    "help",
    "version"
  ],
  alias: {
    "h": "help",
    "v": "version"
  },
  default: {
    "help": false,
    "version": false
  }
});

function showHelp() {
  console.log(`
${pkg.description}

Usage
  ${Object.keys(pkg.bin)[0]} [modules]

Options
  -h, --help       Show help.
  -v, --version    Print version.
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
  bundleSize(argv._).then((value) => {
    console.log(value);
  });
}
