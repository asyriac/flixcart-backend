const Cart = require('../models/cart.model')

const getCart = async (req,res) => {
    try{
        const cart = await Cart.find().populate("product");
        return res.status(200).json({success:true, cart});
    }
    catch(err){
        return res.json({success:false, message: err.message});
    }
}

const addToCart = async (req,res) => {
    try{
        const {id} = req.body;
        let cartItem = await Cart.create({ product: id,qty:1})
        cartItem = await cartItem.populate('product').execPopulate();
        return res.status(201).json({success:true, data : cartItem});
    }
    catch(err){
        return res.json({success:false, message: err.message});
    }
}

const updateItemInCart = async (req, res) => {
    try{
        const id = req.params.id;
        const qty= req.body.qty;        
        await Cart.findByIdAndUpdate(id, {qty});
        return res.status(201).json({success:true})

    }
    catch(err){
        return res.json({success:false, message: err.message});
    }
}

const deleteItemFromCart = async (req, res) => {
    try{
        const id = req.params.id;
        await Cart.findByIdAndDelete(id);
        return res.status(201).json({success:true})
    }
    catch(err){
        return res.json({success:false, message: err.message});
    }
}

module.exports = {
    getCart,
    addToCart,
    updateItemInCart,
    deleteItemFromCart
}