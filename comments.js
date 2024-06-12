// create web server

var express = require('express');
var app = express();

// create a route to handle incoming requests
app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

// start the server on port 8000
app.listen(8000);
console.log('Server started on port 8000');
