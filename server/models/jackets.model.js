const mongoose = require("mongoose");

const jacketsSchema = new mongoose.Schema({
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

const JACKETSMODELS = mongoose.model("jacket", jacketsSchema);

module.exports = { JACKETSMODELS };
