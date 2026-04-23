import React from "react";
import "../styles/Pronunciation.css";

const WordPronunciation = () => {
  return (
    <div className="word-page">
      <div className="word-content">
        <div className="word-intro">
          <span className="word-badge">SOUND LAB</span>
          <h1>Word Pronunciation</h1>
          <p>Type any word and master how it sounds.</p>
        </div>

        <div className="word-card">
          <div className="word-form">
            <input type="text" placeholder="Enter a word..." className="word-input"/>
            <button className="pronounce-btn">Pronounce</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordPronunciation;