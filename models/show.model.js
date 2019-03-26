const mongoose = require("mongoose");
const activePerformance = require('../models/active.performance')

const showSchema = new mongoose.Schema(
  {
    performances: {
      type: []
    },
    activePerformance: {
      type: activePerformance //<---- ¿Esto es así?
    }
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
