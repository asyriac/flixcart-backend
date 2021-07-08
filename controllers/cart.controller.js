const Cart = require("../models/cart.model");

const getCart = async (req, res) => {
  try {
    const user = req.decodedToken.id;
    const cart = await Cart.find({ user }).populate("product");
    return res.status(200).json({ success: true, cart });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { id } = req.body;
    const user = req.decodedToken.id;
    let cartItem = await Cart.create({ product: id, qty: 1, user });
    cartItem = await cartItem.populate("product").execPopulate();
    return res.status(201).json({ success: true, data: cartItem });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

const updateItemInCart = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = req.decodedToken.id;
    const qty = req.body.qty;
    const result = await Cart.findOneAndUpdate({ _id, user }, { qty });
    console.log(result);
    return res.status(201).json({ success: true });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

const deleteItemFromCart = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = req.decodedToken.id;
    await Cart.findOneAndDelete({ _id, user });
    return res.status(201).json({ success: true });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

module.exports = {
  getCart,
  addToCart,
  updateItemInCart,
  deleteItemFromCart,
};
