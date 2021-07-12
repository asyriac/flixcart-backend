const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name cannot be empty",
  },
  image: {
    type: String,
    required: "image cannot be empty",
  },
  price: {
    type: Number,
    required: "price cannot be empty",
  },
  inStock: {
    type: Boolean,
    required: "stock cannot be empty",
  },
  fastDelivery: {
    type: Boolean,
    required: "fast delivery cannot be empty",
  },
  rating: {
    type: Number,
    required: "rating cannot be empty",
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
