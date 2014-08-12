require('assert');
var TableMd = require('../lib/index.js');
var assert = require('better-assert');

describe('table', function() {
  describe('setOptions', function() {
    it('Should extend default options', function() {
      var tmd = new TableMd({
        pretty: true
      });
      assert(tmd.options.pretty === true);
      assert(tmd.options.stream === false);
    });
  });

  describe('parseRow', function() {
    it('Should create a standard markdown table row', function() {
      var tmd = new TableMd();
      assert(tmd.parseRow(['cat', 'dog']) === '|cat|dog|');
    });

    it('Should create a standard markdown table header when passed the header flag', function() {
      var tmd = new TableMd();
      assert(tmd.parseRow(['cat', 'dog'], true) === '|cat|dog|\n|---|---|');
    });
  });

  describe('parse', function(){
    it('Should create a standard markdown table given an 2-dim array of data', function(){
      var tmd = new TableMd();
      var data = [['Header', 'Header', 'Header'], ['column', 'column', 'column'], ['column', 'column', 'column']];
      var assertStr = '|Header|Header|Header|\n|------|------|------|\n|column|column|column|\n|column|column|column|';
      assert(tmd.parse(data) === assertStr);
    });
  });
});