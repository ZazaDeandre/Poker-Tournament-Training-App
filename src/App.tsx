import React, { useEffect, useState } from 'react';
import scenariosData from './data/scenarios.json';
import './index.css';

type Scenario = {
  id: number;
  title: string;
  options: string[];
  gtoAnswer: string;
  exploitAnswer: string;
  villainType: string;
};

export default function App() {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [mode, setMode] = useState<'GTO' | 'Exploit'>('GTO');

  useEffect(() => {
    setScenarios(scenariosData);
  }, []);

  const scenario = scenarios[current];

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % scenarios.length);
    setSelected('');
    setShowResult(false);
  };

  if (!scenario) return <p>Loading...</p>;

  return (
    <div style={{ padding: 24, maxWidth: 700, margin: 'auto' }}>
      <h1>GTO Poker Trainer</h1>
      <div style={{ border: '1px solid #ccc', padding: 16, backgroundColor: 'white' }}>
        <h2>Scenario {scenario.id}: {scenario.title}</h2>
        <p><strong>Villain Type:</strong> {scenario.villainType}</p>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          style={{ width: '100%', padding: 8 }}
        >
          <option value="">Choose an action</option>
          {scenario.options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div style={{ marginTop: 16 }}>
          <button onClick={handleSubmit} disabled={!selected} style={{ marginRight: 8 }}>
            Submit
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
        {showResult && (
          <div style={{ marginTop: 16 }}>
            <p>Your action: <strong>{selected}</strong></p>
            <p>Correct GTO Action: <strong>{scenario.gtoAnswer}</strong></p>
            <p>Exploitative Action: <strong>{scenario.exploitAnswer}</strong></p>
          </div>
        )}
      </div>
      <div style={{ marginTop: 20 }}>
        <p>Mode:</p>
        <button onClick={() => setMode('GTO')} style={{ marginRight: 8, fontWeight: mode === 'GTO' ? 'bold' : 'normal' }}>
          GTO
        </button>
        <button onClick={() => setMode('Exploit')} style={{ fontWeight: mode === 'Exploit' ? 'bold' : 'normal' }}>
          Exploitative
        </button>
      </div>
    </div>
  );
}
