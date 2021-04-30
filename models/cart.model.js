const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    qty: {
        type: Number
    }
})


const Cart = mongoose.model("Cart",CartSchema);

module.exports = Cart;