const mongoose = require("mongoose");
const activePerformance = require('../models/active.performance')

const artistPerformanceSchema = new mongoose.Schema({
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
  performance: { type: mongoose.Schema.Types.ObjectId, ref: 'Performance' }
});

const showSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    active: artistPerformanceSchema,
    order: [artistPerformanceSchema]
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

const Show = mongoose.model('Show', showSchema);
module.exports = Show;
