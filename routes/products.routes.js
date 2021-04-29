const express = require('express');
const { createProduct } = require('../controllers/products.controller');
const router = express.Router();

router
    .route('/')
    .get((req,res)=>{
        res.send("Fetch all products...")
    })
    .post(createProduct)


module.exports = router;