import React, { useState } from "react";
import scenarios from "./data/scenarios.json";
import "./App.css";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const scenario = scenarios[currentIndex];
  const progress = ((currentIndex + 1) / scenarios.length) * 100;

  const handleSubmit = () => {
    if (!selectedOption) return;
    setAttempts((prev) => prev + 1);
    if (selectedOption === scenario.gtoAnswer) {
      setScore((prev) => prev + 1);
    }
    setShowAnswer(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scenarios.length);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setScore(0);
    setAttempts(0);
    setSelectedOption(null);
    setShowAnswer(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-wrap">
      {/* --- STICKY HEADER --- */}
      <div className="sticky-header">
        <div className="header-row">
          <h1 style={{ margin: 0 }}>Poker Tournament Training</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="score-tracker">
              Score: {score} / {attempts} (
              {attempts > 0 ? Math.round((score / attempts) * 100) : 0}%)
            </div>
            <button
              className="reset-btn"
              onClick={handleReset}
              title="Reset session"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* --- MAIN QUESTION AREA --- */}
      <p style={{ marginTop: 10 }}>
        Question {currentIndex + 1} / {scenarios.length}
      </p>
      <h2>{scenario.title}</h2>
      <p>Villain Type: {scenario.villainType}</p>

      <div className="options-list">
        {scenario.options.map((option) => (
          <button
            key={option}
            className={`option-btn ${
              selectedOption === option ? "selected" : ""
            }`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="action-buttons">
        <button
          className="primary-btn"
          onClick={handleSubmit}
          disabled={!selectedOption || showAnswer}
        >
          Submit
        </button>
        <button className="secondary-btn" onClick={handleNext}>
          Next
        </button>
      </div>

      {showAnswer && (
        <div className="answer-card">
          <p>
            Your action: <strong>{selectedOption}</strong>
          </p>
          <p>
            Correct GTO Action: <strong>{scenario.gtoAnswer}</strong>
          </p>
          <p>
            Exploitative Action (vs {scenario.villainType}):{" "}
            <strong>{scenario.exploitAnswer}</strong>
          </p>
          <p className="note">
            * Exploitative actions depend on villain tendencies and may differ
            from GTO.
          </p>
        </div>
      )}
    </div>
  );
}
