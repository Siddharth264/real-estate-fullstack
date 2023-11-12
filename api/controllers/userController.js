const bcryptjs = require('bcryptjs');
const User = require('../models/userModel'

const updateUser = (req, res, next)=>{
    if(req.user.id !==req.params.id) return next(errorHandler(401, "You can only upate your own account"))

    try{
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password,10)

            const updatedUser = await User.findByIdAndUpdate(req.params.id,  )
        }
    }catch(error){

    }
}

module.exports = {test, updateUser}