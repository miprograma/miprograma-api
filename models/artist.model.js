const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 35
    },
    description: {
      type: String,
      rquired: true
    },
    imageUrl: String
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

const Artist = mongoose.model("Artist", artistSchema);
mondule.exports = Artist;
