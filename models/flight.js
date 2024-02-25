const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Southwest", "United"],
    },
    airport: {
      type: String,
    },
    flightNo: Number,
    departs: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
