const asyncHandler=require("express-async-handler");
const User=require("../Models/UserModel");

const registerUser=asyncHandler(async(req,res)=>{
    const data=req.body;
    const {email}=data;
    

    const mail=await User.findOne({email});

    if(mail){
        res.status(400);
        throw new Error("User Already exists");
    }

    const user=await User.create(
       data
    );
    if(user){
        

        
        res.status(201).json({
            _id:user._id,
            name:user.fullname,
            email:user.email,
            password:user.password,
            category:user.category,
            country:user.country,
            accountNumber:user.accountNumber,
            address:user.address,
            phone:user.phone
            
            
        });
        
    }else{
        res.status(400);
        throw new Error("User Already exists ");
    }
})
module.exports=registerUser;