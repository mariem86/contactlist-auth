const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const authRouter = require("./routes/auth");
const contactRouter=require("./routes/contact")
//middleWares
app.use(express.json());


//start the server
connectDB();

//routes
app.use("/api/auth", authRouter);
app.use("/api/auth", contactRouter);


//lunch the Server
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`The Serveris Running on port ${port}....`);
});