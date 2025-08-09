import React, { useMemo, useState } from "react";
import scenarios from "./data/scenarios";
import "./App.css";

import CardRow from "./components/CardRow";
// If you already have PokerTable.tsx in components, keep this import.
// Otherwise, you can replace <PokerTable> with a <div className="table"> wrapper.
import PokerTable from "./components/PokerTable";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const scenario = scenarios[currentIndex];
  const progress = Math.round(((currentIndex + 1) / scenarios.length) * 100);

  const handleSubmit = () => {
    if (!selectedOption) return;
    setAttempts((p) => p + 1);
    if (selectedOption === scenario.gtoAnswer) {
      setScore((p) => p + 1);
    }
    setShowAnswer(true);
  };

  const handleNext = () => {
    setCurrentIndex((p) => (p + 1) % scenarios.length);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
    setAttempts(0);
  };

  // For visuals: if scenario lacks cards, we’ll render card backs via CardRow.
  const boardToShow = useMemo(() => scenario.board ?? [], [scenario]);
  const holeToShow = useMemo(() => scenario.hole ?? [], [scenario]);

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
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* --- MAIN QUESTION AREA --- */}
      <p style={{ marginTop: 10 }}>
        Question {currentIndex + 1} / {scenarios.length}
      </p>
      <h2>{scenario.title}</h2>
      <p>Villain Type: {scenario.villainType}</p>

      <PokerTable>
        <CardRow label="Board" cards={boardToShow} size="md" />
        <CardRow label="Your Hand" cards={holeToShow} size="lg" />
      </PokerTable>

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
