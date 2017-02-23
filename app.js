console.log('Starting up the server...');

//var initialLikesCount = 0;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));



app.listen(3000);
