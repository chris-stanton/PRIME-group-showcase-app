console.log('Starting up the server...');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');



app.use(express.static('public'));


app.listen(3000);
