import React from 'react'

const LandingPage = () => {
  return (
    <div>


      <div class="nav-bar">
        <div class="right-side">
          <img src="" alt="logo"></img>
          <h2>SpeakEasy</h2>
        </div>

        <div class="mid">
          <a href=".home">Home</a>
          <a href=".features">Features</a>
          <a href="#">Practice</a>
          <a href="#">About</a>
        </div>

        <div class="right-side">
          <button> Get Started</button>
        </div>
      </div>


      <div class="home">
        <div class="left-side">
          <h1>Master English for<br></br> Interviews & Visa<br></br> Success</h1>
          <h3>Practice speaking with AI and gain confidence faster. Get real <br></br>time feedback on your pronunciation, fluency, and confidence. </h3>
        </div>

        <div id="logo">
          <img src="" alt="logo"></img>
        </div>

        <div class="buttons">
          <a href="">Start Practicing</a>
          <a href="">Watch Demo</a>
        </div>
      </div>


      <div class="features">
        <div class="heading">
          <h1>Powerful Features</h1>
          <h4>Everything you need to master English speaking skills</h4>
        </div>

        <div class="cards-container">
          <div class="card">
            <h2>Mock Inertview</h2>
            <h4>Practice answering real interview questions with AI-powered feedback on clarity and confidence.</h4>
          </div>

          <div class="card">
            <h2>Tongue Twisters</h2>
            <h4>Fun exercises to improve pronunciation accuracy and speaking speed with instant results.</h4>
          </div>

          <div class="card">
            <h2>Word Pronunciation</h2>
            <h4>Learn correct pronunciation with phonetics, audio playback, and voice comparison tools.</h4>
          </div>
        </div>
      </div>


      <div class="future-updates">
        <div class="heading">
          <h1>Coming Soon</h1>
          <h4>Level up your communication with advanced AI features</h4>
        </div>

        <div class="cards-container">
          <div class="card">
            <h2>AI Interview Questions</h2>
            <h4>Dynamic AI-generated questions based on role</h4>
          </div>

          <div class="card">
            <h2>Grammar Correction</h2>
            <h4>Real-time sentence correction</h4>
          </div>

          <div class="card">
            <h2>Confidence Score</h2>
            <h4>Analyze tone and confidence</h4>
          </div>

          <div class="card">
            <h2>Daily Streak</h2>
            <h4>Track your consistency</h4>
          </div>

          <div class="card">
            <h2>Dark Mode</h2>
            <h4>Switch themes for comfort</h4>
          </div>
        </div>
      </div>


      <div class="conclusion">
        <div class="conc-card">
          <h1>Start your speaking journey today </h1>
          <h4>Join thousands of learners improving their English speaking<br></br> skills every day.</h4>
          <a href="">Get Started</a>
        </div>
      </div>


      <div class="footer">
        <p>&copy; 2026 SpeakEasy. All rights reserved.</p>
      </div>
    </div>
  )
}

export default LandingPage
