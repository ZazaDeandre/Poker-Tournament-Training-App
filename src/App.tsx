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

  if (!scenario) return <p style={{ padding: 24 }}>Loading scenarios...</p>;

  return (
    <div style={{ padding: 24, maxWidth: 750, margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>GTO Poker Trainer</h1>
      <div style={{ border: '1px solid #ccc', padding: 20, background: 'white', borderRadius: 8 }}>
        <h2>Scenario {scenario.id}: {scenario.title}</h2>
        <p><strong>Villain Type:</strong> {scenario.villainType}</p>

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          style={{ width: '100%', padding: 8, marginTop: 8 }}
        >
          <option value="">Choose your action</option>
          {scenario.options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <div style={{ marginTop: 16 }}>
          <button
            onClick={handleSubmit}
            disabled={!selected}
            style={{ marginRight: 8, padding: '8px 16px' }}
          >
            Submit
          </button>
          <button onClick={handleNext} style={{ padding: '8px 16px' }}>
            Next
          </button>
        </div>

        {showResult && (
          <div style={{ marginTop: 16 }}>
            <p>Your action: <strong>{selected}</strong></p>
            <p>Correct GTO Action: <strong>{scenario.gtoAnswer}</strong></p>
            <p>Exploitative Action: <strong>{scenario.exploitAnswer}</strong></p>
          </div>
        )}
      </div>

      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <p>Mode:</p>
        <button
          onClick={() => setMode('GTO')}
          style={{ marginRight: 8, fontWeight: mode === 'GTO' ? 'bold' : 'normal' }}
        >
          GTO
        </button>
        <button
          onClick={() => setMode('Exploit')}
          style={{ fontWeight: mode === 'Exploit' ? 'bold' : 'normal' }}
        >
          Exploitative
        </button>
      </div>
    </div>
  );
}
