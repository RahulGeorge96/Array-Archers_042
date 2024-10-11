const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  cart: [
    {
      type: Object,
      required: true,
    },
  ],
  emailID: { type: String, required: true },
  password: { type: String },
  username: { type: String, required: true },
});

const USERSMODELS = mongoose.model("user", usersSchema);

module.exports = { USERSMODELS };
