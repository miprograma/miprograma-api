const mongoose = require("mongoose");

const artistPerformanceSchema = new mongoose.Schema(
  {
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },//<--¿Se referencia en mayúscula?
    performance: { type: mongoose.Schema.Types.ObjectId, ref: 'Performance' }
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

const ArtistPerformance = mongoose.model("Artist", artistPerformanceSchema);
module.exports = ArtistPerformance;
