const express = require("express");
const router = express.Router();

const products = require('./products.routes');
router.use("/products", products);

const cart = require('./cart.routes');
router.use('/cart',cart);

const wishlist = require('./wishlist.routes')
router.use('/wishlist',wishlist);

const users = require('./users.routes');
router.use("/users",users);


module.exports = router;