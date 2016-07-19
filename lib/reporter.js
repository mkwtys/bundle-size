'use strict';

const Table = require('cli-table2');

module.exports = (data) => {
  var table = new Table({
    chars: {
      'top': '',
      'top-mid': '',
      'top-left': '',
      'top-right': '',
      'bottom': '',
      'bottom-mid': '',
      'bottom-left': '',
      'bottom-right': '',
      'left': '',
      'left-mid': '',
      'mid': '',
      'mid-mid': '',
      'right': '',
      'right-mid': '',
      'middle': ''
    },
    style: {
      'padding-left': 0,
      'padding-right': 2
    }
  });

  table.push(['env', 'bundle', 'minify', 'gzip']);
  data.forEach((item) => {
    let list = [];

    if (!item.env) {
      list.push('--');
    } else {
      list.push(item.env);
    }

    list.push(item.bundle);
    list.push(item.min);
    list.push(item.gzip);

    table.push(list);
  });

  return `${data[0].packages}

${table.toString()}
`;
};
