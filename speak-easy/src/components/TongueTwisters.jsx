import React from "react";
import "../styles/TongueTwisters.css";

const TongueTwisters = () => {
  return (
    <div className="tongue-page">
      <div className="tongue-content">
        <div className="tongue-intro">
          <span className="tongue-badge">FUN &amp; PLAYFUL</span>
          <h1>Tongue Twisters</h1>
          <p>Loosen up your tongue with quick challenges.</p>
        </div>

        <div className="difficulty-tabs">
          <button className="difficulty-btn active">Easy</button>
          <button className="difficulty-btn">Medium</button>
          <button className="difficulty-btn">Hard</button>
        </div>

        <div className="twister-card">
          <p className="twister-label">
            Try this <span>👇</span>
          </p>

          <h2>"She sells seashells by the seashore"</h2>

          <div className="mic-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
              />
            </svg>
          </div>

          <p className="record-text">Tap to record</p>
        </div>

        <div className="tongue-actions">
          <button className="next-twister-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            Next Twister
          </button>
        </div>
      </div>
    </div>
  );
};

export default TongueTwisters;