const mongoose = require("mongoose");

const helmetsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  imageurl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: true,
  },
  price: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const HELMETSMODELS = mongoose.model("helmet", helmetsSchema);

module.exports = { HELMETSMODELS };
