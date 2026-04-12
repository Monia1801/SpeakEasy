import React from 'react'
import {useNavigate} from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>

      <header>
        <nav>
          <div className="nav-left-side">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="audio-logo">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>
            <h2>SpeakEasy</h2>
          </div>

          <div className="mid">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#future-updates">Future</a>
          </div>

          <div className="right-side">
            <button onClick={()=>navigate("/login")}> Get Started</button>
          </div>
        </nav>
      </header>

      <section id="home">
        <div className="home-left-side">
          <h1>
            Master English for <br />
            <span className="green">Interviews</span> &{" "}
            <span className="orange">Visa</span> <br />
            <span className="orange">Success</span>
          </h1>

          <p>
            Practice speaking with AI and gain confidence faster. Get real time
            feedback on your pronunciation, fluency, and confidence.
          </p>

          <div className="buttons">
            <button onClick={()=>navigate("/login")}>Start Practicing</button>
            <button onClick={()=>navigate("/login")}>Watch Demo</button>
          </div>
        </div>

        <div className="audio-visual">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
          </svg>

          <div className="audio-bars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>


      <section id="features">
        <div className="heading">
          <h2>Powerful Features</h2>
          <p>Everything you need to master English speaking skills</p>
        </div>

        <div className="cards-container">
          <div className="card">
            <h3>Mock Interview</h3>
            <p>Practice answering real interview questions with AI-powered feedback on clarity and confidence.</p>
          </div>

          <div className="card">
            <h3>Tongue Twisters</h3>
            <p>Fun exercises to improve pronunciation accuracy and speaking speed with instant results.</p>
          </div>

          <div className="card">
            <h3>Word Pronunciation</h3>
            <p>Learn correct pronunciation with phonetics, audio playback, and voice comparison tools.</p>
          </div>
        </div>
      </section>


      <section id="future-updates">
        <div className="heading">
          <h2>Coming Soon</h2>
          <p>Level up your communication with advanced AI features</p>
        </div>

        <div className="cards-container">
          <div className="card">
            <h3>AI Interview Questions</h3>
            <p>Dynamic AI-generated questions based on role</p>
          </div>

          <div className="card">
            <h3>Grammar Correction</h3>
            <p>Real-time sentence correction</p>
          </div>

          <div className="card">
            <h3>Confidence Score</h3>
            <p>Analyze tone and confidence</p>
          </div>

          <div className="card">
            <h3>Daily Streak</h3>
            <p>Track your consistency</p>
          </div>

          <div className="card">
            <h3>Dark Mode</h3>
            <p>Switch themes for comfort</p>
          </div>
        </div>
      </section>


      <section className="conclusion">
        <div className="conc-card">
          <h2>Start your speaking journey today </h2>
          <p>Join thousands of learners improving their English speaking <br></br> skills every day.</p>
          <button onClick={()=>navigate("/login")}>Get Started</button>
        </div>
      </section>


      <footer className="footer">
        <p>&copy; 2026 SpeakEasy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage
