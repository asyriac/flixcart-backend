const mongoose = require("mongoose");

const initDB = async () => {
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qtdp5.mongodb.net/flixcart?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex:true,
        })
        console.log('Connected to database');
    }
    catch(err){console.log("Connection to database failed",err)}
}

module.exports = initDB