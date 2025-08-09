// src/App.tsx
import React, { useMemo, useState } from "react";
import PokerTable from "./components/PokerTable";
import scenariosData, { Scenario } from "./data/scenarios";
import "./App.css";

type Mode = "GTO" | "Exploit";

export default function App() {
  // local state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [mode, setMode] = useState<Mode>("GTO");
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);

  // pull current scenario safely
  const scenario: Scenario | undefined = scenariosData[currentIndex];

  const progress = useMemo(() => {
    if (!scenariosData.length) return 0;
    return Math.round(((currentIndex + 1) / scenariosData.length) * 100);
  }, [currentIndex]);

  const handleSubmit = () => {
    if (!selectedOption || !scenario) return;
    setAttempts((prev: number) => prev + 1);
    const correct = mode === "GTO" ? scenario.gtoAnswer : scenario.exploitAnswer;
    if (selectedOption === correct) {
      setScore((prev: number) => prev + 1);
    }
    setShowAnswer(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev: number) => (prev + 1) % scenariosData.length);
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

  if (!scenario) {
    return (
      <div style={{ padding: 24 }}>
        <h2>No scenarios found.</h2>
        <p>Make sure <code>src/data/scenarios.ts</code> exists and is exported correctly.</p>
      </div>
    );
  }

  const correctForMode = mode === "GTO" ? scenario.gtoAnswer : scenario.exploitAnswer;

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
        Question {currentIndex + 1} / {scenariosData.length}
      </p>
      <h2>{scenario.title}</h2>
<p>Villain Type: {scenario.villainType}</p>

{/* Poker table graphics */}
<PokerTable hole={scenario.hole} board={scenario.board} />


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
            Correct {mode} Action: <strong>{correctForMode}</strong>
          </p>
          <p className="note">
            * Exploitative actions depend on villain tendencies and may differ
            from GTO.
          </p>
        </div>
      )}

      {/* Mode toggle */}
      <div className="mode-wrap">
        <span>Mode:</span>
        <div className="mode-buttons">
          <button
            className={mode === "GTO" ? "mode-active" : "mode"}
            onClick={() => setMode("GTO")}
          >
            GTO
          </button>
          <button
            className={mode === "Exploit" ? "mode-active" : "mode"}
            onClick={() => setMode("Exploit")}
          >
            Exploitative
          </button>
        </div>
      </div>
    </div>
  );
}
