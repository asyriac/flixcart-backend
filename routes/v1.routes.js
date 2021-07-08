const express = require("express");
const router = express.Router();

const { registerUser, loginUser, logoutUser, protectedRoute, currentUser } = require("../controllers/user.controller");
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/current-user", protectedRoute, currentUser);

const products = require("./products.routes");
router.use("/products", products);

const cart = require("./cart.routes");
router.use("/cart", protectedRoute, cart);

const wishlist = require("./wishlist.routes");
router.use("/wishlist", protectedRoute, wishlist);

module.exports = router;
