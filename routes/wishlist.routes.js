const express = require('express');
const { getWishlist, addToWishlist, deleteItemFromWishlist } = require('../controllers/wishlist.controller');
const router = express.Router();

router
    .route('/')
    .get(getWishlist)
    .post(addToWishlist)

router
    .route('/:id')
    .delete(deleteItemFromWishlist)

module.exports = router;