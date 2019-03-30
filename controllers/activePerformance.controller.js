// const ActivePerformance = require("../models/nextPerformance.model");
// const createError = require("http-errors");
// const passport = require("passport");

// module.exports.list = (req, res, next) => {
//   ActivePerformance.find()
//     .then(cards => res.json(cards))
//     .catch(next);
// };

// module.exports.create = (req, res, next) => {
//   const activePerformance = new ActivePerformance(req.body);
//   artist
//     .save()
//     .then(activePerformance => res.json(activePerformance))
//     .catch(next);
// };

// module.exports.update = (req, res, next) => {
//   ActivePerformance.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(activePerformance => {
//       if (!activePerformance) {
//         throw createError(404, "Artist not found");
//       } else {
//         res.json(activePerformance);
//       }
//     })
//     .catch(next);
// };

// module.exports.delete = (req, res, next) => {
//   ActivePerformance.findByIdAndDelete(req.params.id)
//     .then(activePerformance => {
//       if (!activePerformance) {
//         throw createError(404, "Artist not found");
//       } else {
//         res.status(204).json();
//       }
//     })
//     .catch(next);
// };
