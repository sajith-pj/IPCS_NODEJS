const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  description: String,
  isDeleted: { type: Boolean, default: false},
});

module.exports = mongoose.model("Product", productSchema);
