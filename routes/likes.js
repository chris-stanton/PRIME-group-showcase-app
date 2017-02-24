
var express = require('express');
var router = express.Router();
var bios = require('./bios');

router.get('/', function(req, res) {
  res.send(bios);
}

module.exports = router;
