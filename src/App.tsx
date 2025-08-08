import React, { useState } from 'react';
import scenarios from './data/scenarios.json';
import './App.css';
import CardRow from './components/CardRow';
import RangeChart from './components/RangeChart';

interface Scenario {
  id: number;
  title: string;
  options: string[];
  gtoAnswer: string;
  exploitAnswer: string;
  villainType: string;
  // OPTIONAL visual fields:
  hole?: string[];      // e.g. ["As","Kd"]
  board?: string[];     // e.g. ["Ts","7c","2d","Ah","2s"]
  rangeHint?: Record<string, number>; // e.g. {"AKs":0.9,"AQs":0.6,"KQo":0.4}
}

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const scenario = scenarios[currentIndex] as Scenario;

  const handleOptionClick = (option: string) => {
    if (showAnswer) return;
    setSelectedOption(option);
    setShowAnswer(true);
    setAttempts((a) => a + 1);
    if (option === scenario.gtoAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      alert(`Session complete! You got ${score} / ${attempts} correct.`);
    }
  };

  const progress = ((currentIndex + 1) / scenarios.length) * 100;

  return (
    <div className="app-wrap">
      <div className="header-row">
        <h1>Poker Tournament Training</h1>
        <div className="score-tracker">
          Score: {score} / {attempts} ({attempts > 0 ? Math.round((score / attempts) * 100) : 0}%)
        </div>
      </div>

      <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
      <p>Question {currentIndex + 1} / {scenarios.length}</p>

      <div className="panel">
        <h2>{scenario.title}</h2>
        <p><strong>Villain Type:</strong> {scenario.villainType}</p>

        {/* Visuals */}
        <CardRow label="Hole Cards" cards={scenario.hole} size="md" />
        <CardRow label="Board Cards" cards={scenario.board} size="sm" />

        {/* Options */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
          {scenario.options.map((opt) => {
            const cls =
              showAnswer
                ? opt === scenario.gtoAnswer
                  ? 'option-btn correct'
                  : opt === selectedOption
                  ? 'option-btn incorrect'
                  : 'option-btn'
                : 'option-btn';

            return (
              <button key={opt} className={cls} onClick={() => handleOptionClick(opt)} disabled={showAnswer}>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Answer & Range */}
        {showAnswer && (
          <div style={{ marginTop: 14 }}>
            <p><strong>GTO Answer:</strong> {scenario.gtoAnswer}</p>
            <p><strong>Exploit Answer:</strong> {scenario.exploitAnswer}</p>

            <div style={{ marginTop: 10 }}>
              <RangeChart range={scenario.rangeHint} />
            </div>

            <button onClick={handleNext} className="next-btn">Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
