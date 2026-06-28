const express=require("express");
const app=express();
const cors = require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt=require("bcryptjs");

// origin:true,
//origin:"http://localhost:5173",
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());


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
  userName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
});

const User= mongoose.model("User",userSchema);


const verifyToken=(req,res,next)=>{
  const token=req.cookies.token;
  if(!token){
    return res.status(401).json({
      message:"No token found"
    });
  }

  try{
    const decoded=jwt.verify(
      token,
      process.env.JWT_SECRET
    );
    req.user=decoded;
    next();
  }
  catch(error){
    return res.status(401).json({
      message:"Invalid token"
    });
  }
};

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
      const isMatch=await bcrypt.compare(password,found.password);
      if(isMatch){
        const token=jwt.sign({
          id:found._id,
          email:found.email
        },
      process.env.JWT_SECRET,{
        expiresIn:"1d"
      });
      
      
      //to test in the localhost
      // secure:false, 
      // sameSite:"lax",
      res.cookie("token",token,{
        secure:true,
        sameSite:"none",
        httpOnly:true,
        maxAge: 24 * 60 * 60 * 1000
      });

        return res.status(200).json({
          message:"Login successful",
          user:{
            userName:found.userName,
            email:found.email
          }
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
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({
          userName,email,password:hashedPassword
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

const questions = [
  "Tell me about yourself",
  "What are your strengths?",
  "Why should we hire you?",
  "Describe a challenge you faced",
  "Where do you see yourself in 5 years?",
];

app.get("/questions", verifyToken, (req, res) => {
  res.json({ questions });
});

app.get("/mock-interview-data", verifyToken, (req,res)=>{
  res.status(200).json({
    message:"Mock interview protected data",
    questions
  });
});

app.post("/analyze-answer", verifyToken, (req, res) => {

  const { answer, question } = req.body;

  if (!answer) {
    return res.status(400).json({ message: "Answer required" });
  }

  let score = 5;
  let feedback = "Average answer. Try to be more structured.";

  if (answer.length > 150) {
    score += 2;
    feedback = "Good detailed answer.";
  }

  if (
    answer.toLowerCase().includes("team") ||
    answer.toLowerCase().includes("confident")
  ) {
    score += 2;
    feedback = "Strong keywords used. Good communication.";
  }

  if (answer.length < 50) {
    score = 3;
    feedback = "Answer too short. Please elaborate more.";
  }

  return res.json({
    score: Math.min(score, 10),
    feedback,
  });
});

app.get("/tongue-twisters", verifyToken, (req, res) => {
  const difficulty = req.query.difficulty || "easy";

  if (!twisters[difficulty]) {
    return res.status(400).json({
      message: "Invalid difficulty",
    });
  }

  return res.json({
    difficulty,
    twisters: twisters[difficulty],
  });
});

const twisters = {
  easy: [
    "she sells seashells by the seashore",
    "red lorry yellow lorry",
    "toy boat toy boat toy boat",
  ],
  medium: [
    "how can a clam cram in a clean cream can",
    "fuzzy wuzzy was a bear",
    "unique new york unique new york",
  ],
  hard: [
    "six sleek swans swam swiftly southwards",
    "the sixth sick sheik's sixth sheep's sick",
    "strict strong string strictly strung",
  ],
};


app.get("/tongue-twisters", verifyToken, (req, res) => {
  const difficulty = req.query.difficulty || "easy";

  return res.json({
    twisters: twisters[difficulty] || [],
  });
});


app.post("/check-tongue-twister", verifyToken, (req, res) => {
  const { expected, spoken } = req.body;

  if (!expected || !spoken) {
    return res.status(400).json({
      correct: false,
      feedback: "Missing expected or spoken text",
    });
  }

  const normalize = (text) =>
    text.toLowerCase().replace(/[^a-z ]/g, "").trim();

  const isCorrect = normalize(expected) === normalize(spoken);

  return res.json({
    correct: isCorrect,
    feedback: isCorrect
      ? "🎉 Hooray! Perfect pronunciation!"
      : ` Not correct.`,
  });
});

app.get("/dashboard-data",verifyToken,(req,res)=>{
  res.status(200).json({
    message:"Dashboard data",
    user:req.user
  });
});

app.get("/progress-data",verifyToken,(req,res)=>{
  res.status(200).json({
    message:"Progress protected data"
  });
});

app.get("/pronunciation-data", verifyToken, (req,res)=>{
  res.status(200).json({
    message:"Pronunciation protected data"
  });
});

app.get("/tongue-data", verifyToken, (req,res)=>{
  res.status(200).json({
    message:"Tongue twister protected data"
  });
});

app.get("/check-auth",verifyToken,(req,res)=>{
  return res.status(200).json({
    authenticated:true,
    user:req.user
  });
});

app.post("/logout",(req,res)=>{
  res.clearCookie("token",{
    httpOnly:true,
    secure:true,
    sameSite:"none"
  });
  return res.status(200).json({
    message:"Logged out successfully"
  });
});

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);
});