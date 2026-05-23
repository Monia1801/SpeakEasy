import React,{useState} from 'react'
import "../styles/LoginPage.css";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const userDetails={
      email:email,
      password:password
    };

    try{
      const response=await fetch("https://speakeasy-backend-3hry.onrender.com/login",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(userDetails)
      });

      if(response.ok){
        alert("Login successful");
        navigate("/dashboard");
      }
      else{
        alert("Invalid credentials");
      }
    }
    catch(error){
      console.error("Login fetch error:", error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="container">

      <section className='green-side'>
        <section className='left-top'>
          <h2>SpeakEasy</h2>
        </section>
        <section className='left-middle'>
          <h1>Speak with<br></br> confidence, ace every interview.</h1>
          <p>AI-powered practice sessions that help you<br></br>
             master pronunciation, fluency, and interview<br></br>
             skills.</p>
        </section>
        <section className='left-end'>
          <p>Join 2,000+ learners already practicing</p>
        </section>
      </section>

      <section className='right-side'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h2>Welcome back</h2>
          <p>Enter your credentials to continue</p>

          <label>Email</label>
          <input type="email" placeholder="you@example.com" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" placeholder="••••••••" required value={password} onChange={(e)=>setPassword(e.target.value)}/>

          <div className="options">
            <label className='remember'>
              <input type="checkbox"/>
                <span>Remember me</span>
            </label>
            <span className='forgot'>Forgot Password?</span>
          </div>

          <button type="submit">Sign in</button>
          {/* nClick={()=>{navigate("/dashboard")}} */}

          <div className="divider">or</div>
          <button type="button" className="google-btn">
            Continue with Google
          </button>

          <p className="signup-text" onClick={()=>navigate("/signup")}>
            Don't have an account? <span>Sign up</span>
          </p>
        </form>
      </section>
    </div>
  )
}

export default LoginPage
