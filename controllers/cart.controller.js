const Cart = require('../models/cart.model')

const getCart = async (req,res) => {
    try{
        const cart = await Cart.find().populate("_id");
        return res.status(200).json(cart);
    }
    catch(err){
        return res.json(err);
    }
}

const addToCart = async (req,res) => {
    try{
        const {id,qty} = req.body.product;
        const cartItem = await Cart.create({id,qty})
        return res.status(201).json(req.body.product);
    }
    catch(err){
        return res.json(err);
    }
}

module.exports = {
    getCart,
    addToCart
}