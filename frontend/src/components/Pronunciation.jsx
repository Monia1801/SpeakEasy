import React, { useState } from "react";
import "../styles/Pronunciation.css";

const WordPronunciation = () => {
  const [word, setWord] = useState("");

  const pronounceWord = () => {
    if (!word.trim()) {
      alert("Please enter a word.");
      return;
    }

    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support speech synthesis.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word);

    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice =
      voices.find((voice) => voice.lang === "en-US") ||
      voices.find((voice) => voice.lang.startsWith("en"));

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

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
            <input type="text" placeholder="Enter a word..." className="word-input" value={word} onChange={(e) => setWord(e.target.value)} onKeyDown={(e) => {
                if (e.key === "Enter") {
                  pronounceWord();
                }
              }}
            />

            <button className="pronounce-btn" onClick={pronounceWord}>
              Pronounce
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordPronunciation;