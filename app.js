var express = require('express');
var auth = require('./auth.js')
var app = express();

app.use('/css',express.static(__dirname + '/public/css'));
app.set('view engine','ejs');


app.get('/', function (req, res) {
  console.log(req.query.secret);
  if(!req.query.secret){
    res.render('index');
  } else{
    let code = auth.getCode(req.query.secret);
    res.render('result',{data: {code: code}});
  }
});

var port=process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port} !`);
});