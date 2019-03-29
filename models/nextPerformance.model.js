// const mongoose = require("mongoose");

// const nextPerformanceSchema = new mongoose.Schema(
//   {
//     artist: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" },
//     performance: { type: mongoose.Schema.Types.ObjectId, ref: "Performance" },
//     position: number
//   },
//   {
//     timestamps: true,
//     toJSON: {
//       transform: (doc, ret) => {
//         ret.id = doc._id;
//         delete ret._id;
//         delete ret.__v;
//         return ret;
//       }
//     }
//   }
// );

// const NextPerformance = mongoose.model("Active Performance", nextPerformanceSchema);
// module.exports = NextPerformance;
