const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  message: { type: String, required: true },
});

const CONTACTSMODEL = mongoose.model("contact", contactsSchema);

module.exports = { CONTACTSMODEL };
