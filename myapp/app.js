var express = require('express');
var path = require('path');



var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var auth = require('./auth');

  
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');
app.set('view engine', 'ejs');

passport.use(new Strategy (
  function(username, password) {
    if (username == 'toto' && password == 'tata') 
      return true;
     
    else console.log("erreur");
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res) {
  res.render('home', {user :req.user})
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.post('/login', passport.authenticate('local', {
  failureRedirect : '/login'}), function(req, res){
    res.redirect('/');
});

module.exports = app;
