const express = require('express');
require('dotenv').config()
const dbConnect = require('./config/dbConnect')
const userRouter = require('./routes/userRoute')
const authRouter = require('./routes/authRoute')
import cookieParser from 'cookie-parser';
dbConnect();

const app = express();

const PORT = process.env.PORT || 3030 

app.use(express.json())
app.use(cookieParser)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.use("/api/v1/user",userRouter);
app.use("/api/v1/auth",authRouter);

//middleware

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})