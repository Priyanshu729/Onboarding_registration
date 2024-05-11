const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const UserSchema=new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
        
    },
    phone:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    accountNumber:{
        type:Number,
        required:true
    }
},{timestamps:true});

//pre use karte hai taaki just save karne se pehle ye kaam kardo
UserSchema.pre("save",async function(next){
    //agar password modify hua hai toh change kardo
    if (this.isModified("password")) {
    try {
        // Hash the password
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
   }
})
UserSchema.methods.isPasswordCorrect=async function(password){
    const ans=await bcrypt.compare(password,this.password);
    return ans;

}

const User=mongoose.model("Registration",UserSchema);
module.exports=User;