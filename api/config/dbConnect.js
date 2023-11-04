const mongoose = require('mongoose')

const connectDb = async() => {mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`Connected to the database`)
}).catch((err)=>{
    console.log(`Couldn't connect to the DB, ${err}`)
    process.exit(1)
})
}

module.exports = connectDb