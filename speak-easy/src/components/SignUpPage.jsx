import React from 'react'
import "../styles/SignUpPage.css";
import {useNavigate} from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">

      <section className='white-side'>
        <form className='login-form'>
          <h2>Create Account</h2>
          <p>Start your speaking journey today</p>

          <label>Name</label>
          <input type="name" placeholder="Name" required/>
          <label>Email</label>
          <input type="email" placeholder="E-mail Address" required/>
          <label>Password</label>
          <input type="password" placeholder="Password" required/>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" required/>
          <button type="submit" onClick={()=>{navigate("/login")}}>Create Account</button>

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
             pronunciation drills — all powered by AI<br></br>
             feedback.</p>
        </section>
        <section className='grreen-end'>
          <p>Join 2,000+ learners already practicing</p>
        </section>
      </section>
      </div>
      </div>  
  )
}

export default SignUpPage
