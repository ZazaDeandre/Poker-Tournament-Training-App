import React from 'react';
import PlayingCard from './PlayingCard';

type Props = {
  cards?: string[];      // e.g. ["As","Kd"] or ["Ts","7c","2d","Ah","2s"]
  label: string;
  size?: 'sm' | 'md' | 'lg';
};

export default function CardRow({ cards, label, size = 'md' }: Props) {
  if (!cards || cards.length === 0) {
    return (
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>{label}</div>
        <div className="card-placeholder">[{label} Image]</div>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>{label}</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {cards.map((c) => <PlayingCard key={c + Math.random()} code={c} size={size} />)}
      </div>
    </div>
  );
}
