
const express=require("express");
const connectDB  = require("./config/db");
const dotenv=require("dotenv");
const userRoutes=require("./routes/userRoutes");
const cors=require("cors");
const path = require('path');
dotenv.config();

connectDB();

const app=express();
app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === "production")
app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'frontend','build', 'index.html'));
});
app.use("/api/v1/users",userRoutes);

app.get('/',(req,res)=>{
    res.send("your Api is Running");//response ko humlog send karte hai like post and request act like get
});
app.listen(process.env.PORT,console.log("Server ported on 5000"));//(port number,print something)