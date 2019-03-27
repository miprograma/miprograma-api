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
      required: true
    },
    imageUrl: {
      type: String,
      default: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2015/01/09/14208328301275.jpg"
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

const Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist;
