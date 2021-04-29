const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required: "username cannot be empty",
        unique: true
    },
    password : {
        type: String,
        required: "password cannot be empty"
    },
    email: {
        type: String,
        required: "email cannot be empty",
        unique: true
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;