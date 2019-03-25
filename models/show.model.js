const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
  {
    dateShow: {
      type: Date
    },
    session: {
      type: number
    },
    artistId: String,
    performanceId: String
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
