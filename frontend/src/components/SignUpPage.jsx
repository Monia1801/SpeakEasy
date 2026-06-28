import React,{useState} from 'react'
import "../styles/SignUpPage.css";
import {useNavigate} from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [userName,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const newUser={
      userName:userName,
      email:email,
      password:password
    };

    if(password!==confirmPassword){
      alert("Passwords do not match");
      return;
    }

    try{
      const response=await fetch(`${API_URL}/signup`,{
      //  const response=await fetch(`http://localhost:3000/signup`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newUser)
      });

      const data=await response.json();

        if(response.status===409){
          alert(data.message);
          if(data.message==="Email id already exists"){
            navigate("/login");
          }
        }
        else if(response.ok){
          navigate("/login");
        }
        else{
          alert(data.message);
        }
      }

    catch(error){
      console.log(error);
      alert("Error in connecting backend.Please wait for some time.");
    }
  }

  return (
    <div>
      <div className="container">

      <section className='white-side'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <p>Start your speaking journey today</p>

          <label>Name</label>
          <input type="name" placeholder="Name" required value={userName} onChange={(e)=>setUserName(e.target.value)}/>
          <label>Email</label>
          <input type="email" placeholder="E-mail Address" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
          <button type="submit">Create Account</button>
          {/* onClick={()=>{navigate("/login")}} */}
          <div className="divider">or</div>
          <button type="button" className="google-btn">
            Continue with Google
          </button>

          <p className="signup-text">
            Already have an account? <span onClick={()=>{navigate("/login")}}>Sign in</span>
          </p>
        </form>
      </section>
    
    <section className='green-side'>
        <section className='green-top'>
          <h2>SpeakEasy</h2>
        </section>
        <section className='green-middle'>
          <h1>Your path to fluent,<br></br> fearless speaking<br></br>starts here.</h1>
          <p>Practice mock interviews, tongue twisters, and<br></br>
             pronunciation drills <br></br>
             feedback.</p>
        </section>
        <section className='green-end'>
          <p>Join 2,000+ learners already practicing</p>
        </section>
      </section>
      </div>
      </div>  
  )
}

export default SignUpPage
