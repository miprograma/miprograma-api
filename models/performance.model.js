const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema = ({
title: {
  type: String,
  required: true
},
description: {
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

const Performance = mongoose.model('Performance', performanceSchema);
mondule.exports = Performance;