var express = require('express');
var auth = require('./auth.js')
var app = express();
app.get('/', function (req, res) {
  res.send(auth.getCode(req.query.secret));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});