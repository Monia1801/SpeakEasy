const express=require("express");
const app=express();
const cors = require("cors");
const mongoose=require("mongoose");
require("dotenv").config();


app.use(cors({
  origin:process.env.CLIENT_URL,
  credentials:true
}));
app.use(express.json());


const MONGO_URI=process.env.MONGO_URI;
if(MONGO_URI){
  mongoose.connect(MONGO_URI)
  .then(()=>{
    console.log("MongoDB connected successfully");
  })
  .catch((error)=>{
    console.error("MongoDB connection error:", error);
  });
}
else{
  console.error("MongoDB not connected: MONGO_URI is missing");
}

const userSchema=new mongoose.Schema({
  userName:String,
  email:String,
  password:String
});

const User= mongoose.model("User",userSchema);

app.post("/login",async (req,res)=>{

  try{
    const {email,password}=req.body;
    if (!email || !password) {
      return res.status(400).json({
        message:"Email and password are required"
      });
    }

    const found=await User.findOne({email});

    if(found){
      console.log("Inside found");
      if(password===found.password){
        return res.status(200).json({
          message:"Login successful",
        });
      }
      else{
        console.log("Inside else of found")
        return res.status(401).json({
          message:"Invalid credentials"
        });
      }
    }
    else{
      console.log("User not found")
      return res.status(404).json({
        message:"User not found"
      });
    }
  }
  catch(error){
    console.error("Login route error:", error);
    return res.status(500).json({
      message:"Server Error"
    });
  }
});


app.post("/signup",async (req,res)=>{
  try{
    const {userName,email,password}=req.body;
    const alreadyExist=await User.findOne({email});
    if(alreadyExist){
      return res.status(409).json({
        message:"Email id already exists"
      });
    }
    else{
      const findUserName=await User.findOne({userName});
      if(findUserName){
        return res.status(409).json({
          message:"Change username"
        });
      }
      else{
        const newUser=new User({
          userName,email,password
        });
        await newUser.save();
        return res.status(201).json({
          message:"User registered successfully"
        });
      }
    }
  }
  catch(error){
    console.log(error);
    return res.status(500).json({
      message:"Server Error"
    });
  }
  
});

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);
});