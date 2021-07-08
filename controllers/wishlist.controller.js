const Wishlist = require("../models/wishlist.model");

const getWishlist = async (req, res) => {
  try {
    const user = req.decodedToken.id;
    const wishlist = await Wishlist.find({ user }).populate("product");
    return res.status(200).json({ success: true, wishlist });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

const addToWishlist = async (req, res) => {
  try {
    const { id } = req.body;
    const user = req.decodedToken.id;
    let wishlistItem = await Wishlist.create({ product: id, user });
    wishlistItem = await wishlistItem.populate("product").execPopulate();
    return res.status(201).json({ success: true, data: wishlistItem });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

const moveToCart = async (req, res) => {
  try {
    const _id = req.params.id;
    const qty = req.body.qty;
    const user = req.decodedToken.id;
    await Cart.findOneAndUpdate({ _id, user }, { qty });
    return res.status(201).json({ success: true });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

const deleteItemFromWishlist = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = req.decodedToken.id;
    await Wishlist.findOneAndDelete({ _id, user });
    return res.status(201).json({ success: true });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

module.exports = {
  getWishlist,
  addToWishlist,
  moveToCart,
  deleteItemFromWishlist,
};
