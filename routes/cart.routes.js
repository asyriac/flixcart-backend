const express = require('express');
const { getCart, addToCart, updateItemInCart, deleteItemFromCart } = require('../controllers/cart.controller');
const router = express.Router();

router
    .route('/')
    .get(getCart)
    .post(addToCart)

router
    .route('/:id')
    .post(updateItemInCart)
    .delete(deleteItemFromCart)

module.exports = router;