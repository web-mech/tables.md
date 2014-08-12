TablesMd
========

Markdown table creator

#####Usage
```
var TableMd = require('tables-md');

var tableMd = new TableMd();

var data = [['Header', 'Header', 'Header'], ['column', 'column', 'column'], ['column', 'column', 'column']];

console.log(tableMd.parse(data));
```

Output:

|Header|Header|Header|
|------|------|------|
|column|column|column|
|column|column|column|

#Testing & Development
```
mocha
```
or

```
npm test
```
