const Show = require("../models/show.model");
const createError = require("http-errors");
const passport = require("passport");

module.exports.list = (req, res, next) => {
  Show.find()
    .then(show => res.json(show))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  const show = new Show(req.body);
  show
    .save()
    .then(show => res.json(show))
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Show.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(show => {
      if (!show) {
        throw createError(404, "Show not found");
      } else {
        res.json(show);
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Show.findByIdAndDelete(req.params.id)
    .then(show => {
      if (!show) {
        throw createError(404, "Show not found");
      } else {
        res.status(204).json();
      }
    })
    .catch(next);
};
