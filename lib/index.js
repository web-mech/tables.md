var util = require('util');

var _options = {
  pretty: false,
  stream: false,
  tableDelimiter: '|',
  cellPadding: ' ',
  lineBreak: '\n'
};

var TableMdClass = (function() {
  function TableMd(options) {
    this.configure(options);
  }

  TableMd.prototype.configure = function configure(options) {
    this.options = util._extend(_options, options || {});
  };

  TableMd.prototype.parseRow = function parseRow(row, header) {
    var delim = this.options.tableDelimiter;
    var rowMd = [delim+row.join(delim)+delim];
    if(header) {
      rowMd.push(rowMd[0].replace(/\w/g, '-'));
    }
    return rowMd.join(this.options.lineBreak);
  };

  TableMd.prototype.parse = function parse(rows) {
    var md = [];
    for (var i = 0; i < rows.length; i++) {
      md.push(this.parseRow(rows[i], i === 0));
    }
    return md.join(this.options.lineBreak);
  };

  return TableMd;
})();

module.exports = TableMdClass;