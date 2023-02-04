import React, { useState, useEffect } from "react";
import "./TypingGame.css";

const TypingGame = () => {
  const [wordCount, setWordCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (isTimeRunning && timeLeft > 0) {
      setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsTimeRunning(false);
    }
  }, [timeLeft, isTimeRunning]);

  const handleChange = (event) => {
    setText(event.target.value);
    setWordCount(event.target.value.split(" ").length);
  };

  const handleStartClick = () => {
    setIsTimeRunning(true);
    setWordCount(0);
    setTimeLeft(10);
    setText("");
  };

  return (
    <div className="container">
      <h1 className="title">Typing Game</h1>
      <textarea
        className="text-area"
        onChange={handleChange}
        value={text}
      />
      <h4 className="word-count">Word Count: {wordCount}</h4>
      <h4 className="time-left">Time Left: {timeLeft}</h4>
      <button className="start-button" onClick={handleStartClick} disabled={isTimeRunning}>
        Start
      </button>
    </div>
  );
};

export default TypingGame;
