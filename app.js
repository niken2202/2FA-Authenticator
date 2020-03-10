var express = require('express');
var auth = require('./auth.js')
var app = express();
app.get('/', function (req, res) {
  res.send(auth.getCode(req.query.secret));
});

var port=process.env.PORT;
app.listen(port, function () {
  console.log(`Example app listening on port ${port} !`);
});