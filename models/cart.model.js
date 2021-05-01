const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    qty: {
        type: Number
    }
})


const Cart = mongoose.model("Cart",CartSchema);

module.exports = Cart;