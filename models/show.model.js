const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
  { title: String,
    date:{ type: Date,
           required: true
  },
    session: { type: Number,
              max: 5,
              required: true
    },
    show:[{
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },//<--¿Se referencia en mayúscula?
    performance: { type: mongoose.Schema.Types.ObjectId, ref: 'Performance' },
    active: false
    }]
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


//   {
//     title: { type: String, required: true },
// //--> ¿Podría ser que me sobre? --> active: artistPerformanceSchema,
//     order: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ArtistPerformance' }]
//   },