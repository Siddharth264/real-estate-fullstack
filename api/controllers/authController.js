const User = require('../models/userModel');
const bcryptjs = require('bcryptjs');
const errorHandler = require('../utils/errors')
const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashedPassword});

    try{
        await newUser.save();
        res.status(201).json({msg: "User created successfully"})
    }catch(error){
        next(error);
    }
    
}

module.exports = {signup}