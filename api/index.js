const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");
const listingRouter = require('./routes/listingRoute')
const cookieParser = require("cookie-parser");
const path = require("path");
dbConnect();

const _dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/listing", listingRouter)

app.use(express.static(path.join(_dirname,'/client/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname,'client','dist', 'index.html'));
})

//middleware

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
