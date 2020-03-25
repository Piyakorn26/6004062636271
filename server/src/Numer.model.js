const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  x: {
    type: String
  },
  y: {
    type: String
  }
});

const numer = mongoose.model("numer", userSchema);

module.exports = numer;
