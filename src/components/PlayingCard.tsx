import React from 'react';

type Props = { code: string; size?: 'sm' | 'md' | 'lg' };

// code examples: "As" (Ace of spades), "Td" (Ten of diamonds), "7c", "Kh"
const suitMap: Record<string, string> = {
  s: '♠',
  h: '♥',
  d: '♦',
  c: '♣',
};

const rankMap: Record<string, string> = {
  A: 'A', K: 'K', Q: 'Q', J: 'J', T: '10',
  '9': '9', '8': '8', '7': '7', '6': '6', '5': '5', '4': '4', '3': '3', '2': '2'
};

export default function PlayingCard({ code, size = 'md' }: Props) {
  const rank = rankMap[code?.[0]?.toUpperCase() || 'A'] || 'A';
  const suitKey = code?.[1]?.toLowerCase() || 's';
  const suit = suitMap[suitKey] || '♠';

  const isRed = suitKey === 'h' || suitKey === 'd';

  const dim = size === 'lg' ? 90 : size === 'sm' ? 55 : 70;

  return (
    <div
      style={{
        width: dim,
        height: Math.round(dim * 1.4),
        background: '#fff',
        border: '1px solid #999',
        borderRadius: 8,
        boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
        display: 'flex',
        flexDirection: 'column',
        padding: 6,
        justifyContent: 'space-between',
      }}
    >
      <div style={{ fontWeight: 700, color: isRed ? '#c0392b' : '#222' }}>{rank}</div>
      <div style={{ textAlign: 'center', fontSize: dim / 2, color: isRed ? '#c0392b' : '#222' }}>
        {suit}
      </div>
      <div style={{ alignSelf: 'flex-end', transform: 'rotate(180deg)', color: isRed ? '#c0392b' : '#222' }}>
        {rank}
      </div>
    </div>
  );
}
