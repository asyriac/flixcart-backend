const User = require('../models/users.model')

const register = async (req,res) => {
    try{
        const user = await User.find({
            "$or": [
                {"username": req.body.username}, 
                {"email": req.body.email}
            ]
        })    
        if(user.length !== 0){
            return res.status(403).json({
                success:false,
                message: "user already exists."
            })
        }
        await User.create(req.body);
        return res.status(201).json({
            success: true,
            message : "user created successfully."
        })
    }
    catch(err){
        return res.status(503).json({
            success: false,
            message : err.message
        })
    }
}

module.exports = {
    register
}