import React, { useState, useRef, useEffect } from "react"; 
import "../styles/MockInterview.css";
import { Mic } from "lucide-react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const MockInterview = () => {

  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioURL, setAudioURL] = useState(null);

  const [transcript, setTranscript] = useState("");
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState("");

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);


  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const recognitionRef = useRef(null);
  const streamRef = useRef(null);


  const fetchQuestions = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/mock-interview-data`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await res.json();

      setQuestions(data.questions);
    } catch (err) {
      console.error("Error fetching questions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const startRecording = async () => {
    try {
      setTranscript("");
      setAudioBlob(null);
      setAudioURL(null);

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, {
          type: "audio/webm",
        });

        setAudioBlob(blob);

        const url = URL.createObjectURL(blob);
        setAudioURL(url);

        setIsRecording(false);
      };

      mediaRecorder.start();

      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;

      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        let text = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          text += event.results[i][0].transcript;
        }

        setTranscript(text);
      };

      recognition.start();
      setIsRecording(true);
    } catch (err) {
      console.error(err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    recognitionRef.current?.stop();

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }

    setIsRecording(false); 
  };


  const resetInterview = () => {
    setIsRecording(false);
    setTranscript("");
    setAudioBlob(null);
    setAudioURL(null);
    setScore(null);
    setFeedback("");

    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
  };

  const submitAnswer = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/analyze-answer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            question: questions[currentQuestion],
            answer: transcript,
          }),
        }
      );

      const data = await res.json();

      setScore(data.score);
      setFeedback(data.feedback);
    } catch (err) {
      console.error("Error analyzing answer:", err);
    } finally {
      setLoading(false);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) =>
      prev < questions.length - 1 ? prev + 1 : 0
    );

    setTranscript("");
    setAudioBlob(null);
    setAudioURL(null);
    setScore(null);
    setFeedback("");
  };

  return (
    <div className="mock-container">
      <div className="content">

        <div className="introduction">
          <span className="badge">PRACTICE SESSION</span>
          <h1>Mock Interview</h1>
          <p>Answer like it's the real thing.</p>
        </div>

        <div className="box">
          <p>
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h2>
            "{questions[currentQuestion] || "Loading..."}"
          </h2>

          <div
            className="mic-circle"
            onClick={isRecording ? stopRecording : startRecording}
            style={{
              cursor: "pointer",
              background: isRecording ? "#ff4d4d" : "#4CAF50",
            }}
          >
            <Mic size={20} color="white" />
          </div>

          <p>
            {isRecording
              ? "Tap to stop recording"
              : "Tap to start recording"}
          </p>

          {transcript && (
            <div className="transcript-box">
              <h3>Your Answer:</h3>
              <p>{transcript}</p>
            </div>
          )}

          {score !== null && (
            <div className="result-box">
              <h3>Score: {score}</h3>
              <p>{feedback}</p>
            </div>
          )}

          {audioURL && <audio controls src={audioURL} />}
        </div>

        <div className="buttons">
          <button onClick={resetInterview}>
            Retry
          </button>

          <button onClick={submitAnswer}>
            Submit Answer
          </button>

          <button onClick={nextQuestion}>
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;