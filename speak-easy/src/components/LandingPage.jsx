import React from 'react'

const LandingPage = () => {
  return (
    <div>

      <header>
        <nav>
          <div className="nav-left-side">
            <img src="" alt="logo"></img>
            <h2>SpeakEasy</h2>
          </div>

          <div className="mid">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#">Practice</a>
            <a href="#">About</a>
          </div>

          <div className="right-side">
            <button> Get Started</button>
          </div>
        </nav>
      </header>


      <section id="home">
        <div className="home-left-side">
          <h1>Master English for Interviews & Visa Success</h1>
          <h4>Practice speaking with AI and gain confidence faster. Get real time feedback on your pronunciation, fluency, and confidence. </h4>
          <div className="buttons">
            <button>Start Practicing</button>
            <button>Watch Demo</button>
          </div>
        </div>

        <div id="logo">
          <img src="" alt="logo"></img>
        </div>

      </section>


      <section id="features">
        <div className="heading">
          <h2>Powerful Features</h2>
          <h4>Everything you need to master English speaking skills</h4>
        </div>

        <div className="cards-container">
          <div className="card">
            <h3>Mock Interview</h3>
            <h4>Practice answering real interview questions with AI-powered feedback on clarity and confidence.</h4>
          </div>

          <div className="card">
            <h3>Tongue Twisters</h3>
            <h4>Fun exercises to improve pronunciation accuracy and speaking speed with instant results.</h4>
          </div>

          <div className="card">
            <h3>Word Pronunciation</h3>
            <h4>Learn correct pronunciation with phonetics, audio playback, and voice comparison tools.</h4>
          </div>
        </div>
      </section>


      <section id="future-updates">
        <div className="heading">
          <h2>Coming Soon</h2>
          <h4>Level up your communication with advanced AI features</h4>
        </div>

        <div className="cards-container">
          <div className="card">
            <h3>AI Interview Questions</h3>
            <h4>Dynamic AI-generated questions based on role</h4>
          </div>

          <div className="card">
            <h3>Grammar Correction</h3>
            <h4>Real-time sentence correction</h4>
          </div>

          <div className="card">
            <h3>Confidence Score</h3>
            <h4>Analyze tone and confidence</h4>
          </div>

          <div className="card">
            <h3>Daily Streak</h3>
            <h4>Track your consistency</h4>
          </div>

          <div className="card">
            <h3>Dark Mode</h3>
            <h4>Switch themes for comfort</h4>
          </div>
        </div>
      </section>


      <section className="conclusion">
        <div className="conc-card">
          <h2>Start your speaking journey today </h2>
          <h4>Join thousands of learners improving their English speaking skills every day.</h4>
          <button>Get Started</button>
        </div>
      </section>


      <footer className="footer">
        <p>&copy; 2026 SpeakEasy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage
