var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.send('Hello World!');
  res.render('home', { titulo: 'Hello App'});
});

module.exports = router;