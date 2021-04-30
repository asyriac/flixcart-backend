const isLoggedIn = (req,res,next) => {

    const {isLoggedIn} = req.body;
    if(!isLoggedIn){
        return res.status(401).json({
            success: false,
            message: "Route is protected"
        })
    }
    next();
}

module.exports = isLoggedIn;