const express = require("express");
const { getCart, addToCart, updateItemInCart, deleteItemFromCart, placeOrder } = require("../controllers/cart.controller");
const { protectedRoute } = require("../controllers/user.controller");
const router = express.Router();

router.route("/").get(getCart).post(addToCart);

router.route("/:id").post(updateItemInCart).delete(deleteItemFromCart);

router.route("/order").get(placeOrder);

module.exports = router;
