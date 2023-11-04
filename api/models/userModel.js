const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true, 'You must provide a username'],
        unique:[true, 'Username already taken']
    },
    email:{
        type: String,
        required:[true, 'You must provide an email'],
        unique:[true, 'email already registered, try logging in']
    },
    password:{
        type: String,
        required:[true, 'You must provide a password'],
    }
},{
    timestamps:true
})

module.exports = mongoose.model("User", userSchema)