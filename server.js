var express = require('express');
var logger = require('morgan');

var app = express();

var PORT = process.env.NODE_ENV || 8080;

app.use(logger('dev'));
app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});

app.listen(PORT, function() {
  console.log("Listening on ", PORT);
});
