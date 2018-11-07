var express = require('express');
var fs = require('fs');
var Promise = require('bluebird');
var router = express.Router();

Promise.promisifyAll(fs);

var app = express();

router.get('/', function(req, res){

 fs.readFileAsync("file.json").then(JSON.parse).then (function(val) {
    console.log(val.success);
})
 .catch(SyntaxError, function(e) {
    console.log("invalid json in file");
 })
 .catch(function(e) {
    res.render('404');
    console.log("file does not exist");
 })
}
);

 module.exports = router;