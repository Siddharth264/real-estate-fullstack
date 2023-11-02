const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true, 'You must provide a username'],
        unique:[true, 'Username must be unique']
    },
    email:{
        type: String,
        required:[true, 'You must provide an email'],
        unique:[true, 'email must be unique']
    },
    password:{
        type: String,
        required:[true, 'You must provide a password'],
    }
},{
    timestamps:true
})

const User = mongoose.model('User',userSchema);

export default User;