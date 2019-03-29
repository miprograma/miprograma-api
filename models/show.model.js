const mongoose = require("mongoose");



const showSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
//--> ¿Podría ser que me sobre? --> active: artistPerformanceSchema,
    order: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ArtistPerformance' }]
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
