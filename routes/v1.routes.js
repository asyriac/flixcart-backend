const express = require("express");
const router = express.Router();

const products = require('./products.routes');
router.use("/products", products);

const users = require('./user.routes');
router.use("/users",users);


module.exports = router;