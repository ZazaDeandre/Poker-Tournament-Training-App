import React from 'react';

// Optional: scenario can supply a map of hand->weight (0..1). Eg: {"AKs":0.9,"AQs":0.7,"A5s":0.3,"KQo":0.6}
type RangeMap = Record<string, number>;

const ranks = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];

function handLabel(i: number, j: number) {
  const r1 = ranks[i], r2 = ranks[j];
  if (i === j) return r1 + r2; // pairs (AA, KK, ...)
  return i < j ? r1 + r2 + 's' : r2 + r1 + 'o';
}

function colorForWeight(w?: number) {
  if (w === undefined) return '#f0f0f0';
  // simple green heatmap: 0 -> light, 1 -> dark
  const g = Math.floor(240 - 140 * Math.min(1, Math.max(0, w)));
  return `rgb(${g}, 255, ${g})`;
}

export default function RangeChart({ range }: { range?: RangeMap }) {
  return (
    <div>
      <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>Range (13×13)</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(13, 24px)',
          gap: 2,
          background: '#fff',
          padding: 6,
          border: '1px dashed #bbb',
          borderRadius: 6,
        }}
      >
        {ranks.map((_, i) =>
          ranks.map((__, j) => {
            const label = handLabel(i, j);
            const w = range ? range[label] : undefined;
            return (
              <div
                key={label}
                title={`${label}${w !== undefined ? `: ${Math.round(w*100)}%` : ''}`}
                style={{
                  width: 24,
                  height: 24,
                  background: colorForWeight(w),
                  fontSize: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e5e5e5',
                }}
              >
                {label}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
