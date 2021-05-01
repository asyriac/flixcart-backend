const Product = require("../models/products.model")


const createProduct = async (req, res) => {
    try{
        await Product.create(req.body);
        return res.status(201).json({
            success: true,
            message: "product added successfully"
        })
    }
    catch(err){
        return res.status(503).json({
            success: false,
            message: err.message
        })
    }
}

const getAllProducts = async (req,res) => {
    try{
        const products = await Product.find({});        
        const jsonResult = products.map((item)=>{
            return {...item._doc, id: item._id};
        })
        return res.status(200).json({
            success: true,
            data : {products:jsonResult}
        })
    }
    catch(err){
        return res.status(503).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {
    createProduct,
    getAllProducts
}