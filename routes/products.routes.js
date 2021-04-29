const express = require('express');
const { createProduct, getAllProducts } = require('../controllers/products.controller');
const router = express.Router();

router
    .route('/')
    .get(getAllProducts)
    .post(createProduct)


module.exports = router;