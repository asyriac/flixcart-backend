const Wishlist = require('../models/wishlist.model')

const getWishlist = async (req,res) => {
    try{
        const wishlist = await Wishlist.find().populate("product");
        return res.status(200).json({success:true, wishlist});
    }
    catch(err){
        return res.json({success:false, message: err.message});
    }
}

const addToWishlist = async (req,res) => {
    try{
        const {id} = req.body;
        let wishlistItem = await Wishlist.create({ product: id})
        wishlistItem = await wishlistItem.populate('product').execPopulate();
        return res.status(201).json({success:true, data : wishlistItem});
    }
    catch(err){
        return res.json({success:false, message: err.message});
    }
}

const moveToCart = async (req, res) => {
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

const deleteItemFromWishlist = async (req, res) => {
    try{
        const id = req.params.id;
        await Wishlist.findByIdAndDelete(id);
        return res.status(201).json({success:true})
    }
    catch(err){
        return res.json({success:false, message: err.message});
    }
}

module.exports = {
    getWishlist,
    addToWishlist,
    moveToCart,
    deleteItemFromWishlist
}