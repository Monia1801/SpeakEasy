import React from "react";
import "../styles/DashboardHome.css";
import {useNavigate} from "react-router-dom";

const DashboardHome = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  return (
    <div className="dashboard-home">
      <div className="dashboard-home-top">
        <section className="intro">
          <h1>Welcome back, {userName ? userName.trim() : "Guest"}</h1>
          <p>Ready to level up your speaking skills today?</p>
        </section>
      </div>

      <div className="performance-cards">
        <section className="stat-card">
          <div className="stat-card-top">
            <h2>78%</h2>
            <span className="stat-change">+5%</span>
          </div>
          <p>Accuracy</p>
        </section>

        <section className="stat-card">
          <div className="stat-card-top">
            <h2>12</h2>
            <span className="stat-change">+3</span>
          </div>
          <p>Sessions</p>
        </section>

        <section className="stat-card">
          <div className="stat-card-top">
            <h2>4.5h</h2>
            <span className="stat-change">+1.2h</span>
          </div>
          <p>Practice Time</p>
        </section>

        <section className="stat-card">
          <div className="stat-card-top">
            <h2>—</h2>
            <span className="soon-badge">Soon</span>
          </div>
          <p>Streak</p>
        </section>
      </div>

      <div className="menu-options">
        <h2>Start Practicing</h2>

        <section className="practice-card practice-card-one">
          <h3>Mock Interview</h3>
          <p>AI-powered interview practice with real-time feedback</p>
        </section>

        <section className="practice-card practice-card-two">
          <h3>Tongue Twisters</h3>
          <p>Fun exercises to improve your pronunciation speed</p>
        </section>

        <section className="practice-card practice-card-three">
          <h3>Pronunciation</h3>
          <p>Master the sounds of English words accurately</p>
        </section>
      </div>

      <div className="activity">
        <div className="activity-grid">
          <section className="activity-card challenge-card">
            <div className="activity-badge challenge-badge">⚡ Daily Challenge</div>
            <span className="xp-badge">+50 XP</span>

            <p className="activity-label">TONGUE TWISTER</p>
            <h3>"She sells seashells by the seashore"</h3>
            <p className="activity-text">
              Repeat 5 times in under 15 seconds without stumbling.
            </p>

            <button className="challenge-btn" onClick={() => navigate("/dashboard/tongue-twisters")}>Start Challenge</button>
          </section>

          <section className="activity-card tip-card">
            <div className="activity-badge tip-badge">💡 Tip of the Day</div>

            <h3>Slow down before you speed up.</h3>
            <p className="activity-text">
              Practicing at half speed builds muscle memory. Speed naturally follows
              clarity.
            </p>

            <blockquote className="tip-quote">
              “Words have energy and power with the ability to help, to heal, to
              hinder, to hurt.” — Yehuda Berg
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;