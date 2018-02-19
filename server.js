var express = require('express');
var app = express();
var server = app.listen(5001, listening);

function listening() {
  console.log('Listennig ...');
}
app.use(express.static('public'));