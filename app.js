require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

const artistsRoutes = require('./routes/artists.routes');
const performancesRoutes = require('./routes/performances.routes');
const showsRoutes = require('./routes/shows.routes');
const authRoutes = require('./routes/auth.routes');
const nextPerformancesRoutes = require('./routes/nextPerformance.routes');

require('./configs/db.config');
const session = require('./configs/session.config');
const corsOptions = require('./configs/cors.config');
require('./configs/passport.config');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(session);
app.use(passport.initialize());
app.use(passport.session());


app.use('/', authRoutes);
app.use('/artists', artistsRoutes);
app.use('/performances', performancesRoutes);
app.use('/next-performance', nextPerformancesRoutes);
app.use('/shows', showsRoutes);
//app.use('/next-performances', nextPerformance);


app.use(function (req, res, next) {
  res.locals.session = req.user;
  next();
});

app.use(function(req, res, next) {
  next(createError(404));
});


//<----------------------- Este error Handler lo he copiado, pero necesitas que Carlos o Julio te lo expliquen.

app.use(function (error, req, res, next) {
  console.error(error);

  res.status(error.status || 500);

  const data = {}

  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400);
    for (field of Object.keys(error.errors)) {
      error.errors[field] = error.errors[field].message
    }
    data.errors = error.errors
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, 'Resource not found')
  }

  data.message = error.message;
  res.json(data);
});

module.exports = app;
