const express = require('express');
const { getCart, addToCart } = require('../controllers/cart.controller');
const router = express.Router();

router
    .rotue('/')
    .get(getCart)
    .post(addToCart)

router
    .route('/:id')
    .get()

module.exports = router;