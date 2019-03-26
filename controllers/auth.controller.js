const User = require('../models/user.model');
const createError = require('http-errors');
const passport = require('passport');

module.exports.isAdmin = (req, res, next) => {
  res.send('Hola Mundo');
}