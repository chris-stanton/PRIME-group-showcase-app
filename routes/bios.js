

var familyBio = [{name: 'Chris Stanton', bio: 'I am ver happy to be at Prime.', image: 'chris.jpeg'},
                 {name: 'Stephanie Stanton', bio: 'Total shopper.', image: 'stephanie.jpeg'},
                 {name: 'Gavin Stanton', bio: 'Cannot wait till summer', image:'gavin.jpeg'},
                 {name: 'TY The Poodle', bio:'Likes to leave a mark on all trees', image: 'ty.jpeg' }];

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send(familyBio);
});

module.exports = router;
