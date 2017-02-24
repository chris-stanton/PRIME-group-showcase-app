console.log('Starting up the server...');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bios = require('./routes/bios');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/routes/bios', bios);


app.listen(3000);
