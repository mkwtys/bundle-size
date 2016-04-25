#! /usr/bin/env node
'use strict';

const minimist = require("minimist");
const pkg = require("../package.json");

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
  ${Object.keys(pkg.bin)[0]} [options]

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
