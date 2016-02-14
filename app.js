var express = require('express');
var app = express();

app.set('views',__dirname + '/views');

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/views/index.html');
});

app.get('/about', function (req, res) {
  res.sendFile(__dirname+'/views/about.html');
});

app.get('/*', function (req, res) {
  res.redirect('/');
});
	
app.listen(5000, function(){
  console.log("app.js listening on port 5000")
})