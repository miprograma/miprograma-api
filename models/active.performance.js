const mongoose = require('mongoose');

const activePerformanceSchema = new mongoose.Schema = ({
artist: {
  type: String, //<--- Referenciar a artistModel?
  required: true
},
performance: {  //<--- Referenciar a performanceModel?
  type: String,
  rquired: true,
}

}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

const activePerformanceSchema = mongoose.model('Active Performance', activePerformanceSchema);
mondule.exports = activePerformance;