const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    id: Number,
    name: String,
    price: Number,
  },
  { versionKey: false }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
