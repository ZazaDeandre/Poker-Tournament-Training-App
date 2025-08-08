import React, { useState } from 'react';
import scenarios from './data/scenarios.json';
import './App.css';

interface Scenario {
  id: number;
  title: string;
  options: string[];
  gtoAnswer: string;
  exploitAnswer: string;
  villainType: string;
}

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const scenario: Scenario = scenarios[currentIndex];

  const handleOptionClick = (option: string) => {
    if (!showAnswer) {
      setSelectedOption(option);
      setShowAnswer(true);
      setAttempts(attempts + 1);
      if (option === scenario.gtoAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`Session complete! You got ${score} / ${attempts} correct.`);
    }
  };

  const progress = ((currentIndex + 1) / scenarios.length) * 100;

  return (
    <div className="app-container">
      <h1>Poker Tournament Training</h1>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <p>
        Question {currentIndex + 1} / {scenarios.length}
      </p>

      {/* Villain Type */}
      <p><strong>Villain Type:</strong> {scenario.villainType}</p>

      {/* Card Images Placeholder */}
      <div className="card-images">
        <div className="card-placeholder">[Hole Cards Image]</div>
        <div className="card-placeholder">[Board Cards Image]</div>
      </div>

      {/* Scenario Title */}
      <h2>{scenario.title}</h2>

      {/* Options */}
      <div className="options">
        {scenario.options.map((option) => (
          <button
            key={option}
            className={`option-btn ${
              showAnswer
                ? option === scenario.gtoAnswer
                  ? 'correct'
                  : option === selectedOption
                  ? 'incorrect'
                  : ''
                : ''
            }`}
            onClick={() => handleOptionClick(option)}
            disabled={showAnswer}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Answer Display */}
      {showAnswer && (
        <div className="answer-section">
          <p>
            <strong>GTO Answer:</strong> {scenario.gtoAnswer}
          </p>
          <p>
            <strong>Exploit Answer:</strong> {scenario.exploitAnswer}
          </p>
          {/* Range Chart Placeholder */}
          <div className="range-placeholder">[Range Chart Here]</div>
          <button onClick={handleNext} className="next-btn">Next</button>
        </div>
      )}

      {/* Score */}
      <div className="score-tracker">
        Score: {score} / {attempts} ({attempts > 0 ? Math.round((score / attempts) * 100) : 0}%)
      </div>
    </div>
  );
};

export default App;
