const mongoose=require("mongoose");

const connectDB=async()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database is Connected ${connect.connection.host}`);
    } catch (error) {
        console.log(`Connection Failed!!! ${error.message}`);
        process.exit();
    }
}
module.exports=connectDB;