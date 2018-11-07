var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.post('/ajouter', function(req, res, next) {
  res.send('c\'est un post');
});

module.exports = router;
