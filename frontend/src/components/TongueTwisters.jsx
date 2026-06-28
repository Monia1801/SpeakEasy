import React, { useState, useEffect } from "react";
import "../styles/TongueTwisters.css";
import { Mic } from "lucide-react";

const TongueTwisters = () => {
  const [twisters, setTwisters] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
  const [index, setIndex] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false); 

  useEffect(() => {
    fetchTwisters(difficulty);
  }, [difficulty]);

  const fetchTwisters = async (level) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/tongue-twisters?difficulty=${level}`,
        {
          credentials: "include",
        }
      );

      const data = await res.json();
      setTwisters(data.twisters || []);
      setIndex(0);
      setTranscript("");
    } catch (err) {
      console.error(err);
    }
  };

  const sentence = twisters[index] || "";

 const handleMicClick = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition not supported");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = false;

  setTranscript("");
  setIsRecording(true);

  recognition.start();

  let finalTranscript = "";

  recognition.onresult = (event) => {
    let liveText = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      liveText += event.results[i][0].transcript;
    }

    finalTranscript = liveText; 
    setTranscript(liveText);
  };

  recognition.onend = async () => {
    setIsRecording(false);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/check-tongue-twister`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            expected: sentence,
            spoken: finalTranscript, 
          }),
        }
      );

      const data = await res.json();

      alert(data.correct ? data.feedback : data.feedback);
    } catch (err) {
      alert("Server error");
    }
  };

  recognition.onerror = () => {
    setIsRecording(false);
    alert("Speech recognition error");
  };
};

  const nextTwister = () => {
    setIndex((prev) => (prev + 1) % twisters.length);
    setTranscript("");
  };

  return (
    <div className="tongue-page">
      <div className="tongue-content">
        <div className="tongue-intro">
          <span className="tongue-badge">FUN &amp; PLAYFUL</span>
          <h1>Tongue Twisters</h1>
          <p>Loosen up your tongue with quick challenges.</p>
        </div>

        {/* Difficulty */}
        <div className="difficulty-tabs">
          <button
            className={`difficulty-btn ${
              difficulty === "easy" ? "active" : ""
            }`}
            onClick={() => setDifficulty("easy")}
          >
            Easy
          </button>

          <button
            className={`difficulty-btn ${
              difficulty === "medium" ? "active" : ""
            }`}
            onClick={() => setDifficulty("medium")}
          >
            Medium
          </button>

          <button
            className={`difficulty-btn ${
              difficulty === "hard" ? "active" : ""
            }`}
            onClick={() => setDifficulty("hard")}
          >
            Hard
          </button>
        </div>

        {/* Card */}
        <div className="twister-card">
          <p className="twister-label">
            Try this <span>👇</span>
          </p>

          <h2>"{sentence}"</h2>

          <div
            className="mic-circle"
            onClick={handleMicClick}
            style={{
              backgroundColor: isRecording ? "#ff4d4d" : "#4CAF50",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            
            <Mic size={20} color="white"/>
          </div>

          <p className="record-text">
            {isRecording ? "Tap to stop recording" : "Tap to start recording"}
          </p>

          {transcript && (
            <p style={{ marginTop: "10px", fontStyle: "italic" }}>
              You said: {transcript}
            </p>
          )}
        </div>

        <div className="tongue-actions">
          <button className="next-twister-btn" onClick={nextTwister}>
            Next Twister
          </button>
        </div>
      </div>
    </div>
  );
};

export default TongueTwisters;