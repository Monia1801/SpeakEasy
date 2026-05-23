const express=require("express");
const app=express();
const cors = require("cors");
const mongoose=require("mongoose");
require("dotenv").config();


app.use(cors());
app.use(express.json());


const MONGO_URI=process.env.MONGO_URI;
if(MONGO_URI){
  mongoose.connect(MONGO_URI)
  .then(()=>{
    console.log("MongoDB connected successfully");
  })
  .catch((error)=>{
    console.log(error);
  });
}
else{
  console.log("MongoDB not connected");
}

const userSchema=new mongoose.Schema({
  userName:String,
  email:String,
  password:String
});

const User= mongoose.model("User",userSchema);

app.post("/login",async (req,res)=>{
  console.log(req.body);
  try{
    const {email,password}=req.body;
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
    console.log(error);
    return res.status(500).json({
      message:"Server Error"
    });
  }
});


app.post("/signup",async (req,res)=>{

});

app.listen(3000,()=>{
  console.log("Server running on http://localhost:3000");
});