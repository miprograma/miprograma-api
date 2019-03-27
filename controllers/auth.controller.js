const User = require('../models/user.model');
const createError = require('http-errors');
const passport = require('passport');

module.exports.isAdmin = (req, res, next) => {
    User.find()
      .then(users => res.json(users))
      .catch(next)
  }



