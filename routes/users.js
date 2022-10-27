var express = require('express');
var router = express.Router();

var times=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  times+=1;
  res.send('User accesses are: '+times)
});

module.exports = router;
