const express = require("express");
const { getCart, addToCart, updateItemInCart, deleteItemFromCart, placeOrder, handleOrder } = require("../controllers/cart.controller");
const { protectedRoute } = require("../controllers/user.controller");
const router = express.Router();

router.route("/").get(getCart).post(addToCart);

router.route("/order").post(handleOrder);

router.route("/:id").post(updateItemInCart).delete(deleteItemFromCart);

module.exports = router;
