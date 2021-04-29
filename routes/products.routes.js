const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req,res)=>{
        res.send("Fetch all products...")
    })


module.exports = router;