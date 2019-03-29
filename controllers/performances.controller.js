const Performance = require("../models/performance.model");
const createError = require("http-errors");
const passport = require("passport");

module.exports.list = (req, res, next) => {
  Performance.find()
    .then(cards => res.json(cards))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  const performance = new Performance(req.body);
  performance
    .save()
    .then(performance => res.json(performance))
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Performance.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(performance => {
      if (!performance) {
        throw createError(404, "Performance not found");
      } else {
        res.json(performance);
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Performance.findByIdAndDelete(req.params.id)
    .then(performance => {
      if (!performance) {
        throw createError(404, "Performance not found");
      } else {
        res.status(204).json();
      }
    })
    .catch(next);
};
