const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
  {
    title: String,
    date: { type: Date, required: true },
    current: {
      artist: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" },
      performance: { type: mongoose.Schema.Types.ObjectId, ref: "Performance" }
    },
    sessions: {
      type: [{
        _id: {
          type: Number,
          min: 1,
          max: 5
        },
        show: {
          type: [
            {
              artist: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" },
              performance: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Performance"
              }
            }
          ],
          default: []
        }
      }],
      default: []
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        ret.sessions = ret.sessions.map(session => {
          const id = session._id;
          delete session._id;
          session.id = id;
          return session
        })
        return ret;
      }
    }
  }
);

showSchema.post('save', function(doc, next) {
  doc.populate('sessions.show.artist')
    .populate('sessions.show.performance')
    .execPopulate()
    .then(() => next());
});

const Show = mongoose.model("Show", showSchema);
module.exports = Show;

