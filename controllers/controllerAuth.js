var passport = require('passport')
var LocalStrategy = require('passport-local')
var crypto = require('crypto')
//Consultas a la base de datos
// var db = require('../db');

const getLogin = (req, res) => {
  res.send('Login')
}

passport.use(new LocalStrategy(function verify(username, password) {}))

module.exports = {
  getLogin,
}
