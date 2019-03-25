const createError = require('http-errors');

module.exports.iisAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()){
    next();
  }else{
    next(createError(403));
  }
}





