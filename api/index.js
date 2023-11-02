const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`Connected to DB`)
}).catch((err)=>{
    console.log(`Couldn't connect to the DB, ${err}`)
})
const app = express();

app.listen(3000, ()=>{
    console.log(`Server is running on port 3000`);
})