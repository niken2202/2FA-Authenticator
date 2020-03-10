var express = require('express');
var auth = require('./auth.js')
var app = express();
app.get('/', function (req, res) {
  console.log(req.query.secret);
  if(req.query.secret===undefined){
    res.send('Cac chau oiiiii!');
  }
  res.send(auth.getCode(req.query.secret));
});

var port=process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port} !`);
});