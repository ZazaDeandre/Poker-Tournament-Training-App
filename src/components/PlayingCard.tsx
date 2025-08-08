import React from "react";

type Props = { code: string; size?: "sm" | "md" | "lg" };

const suitGlyph: Record<string, string> = {
  s: "♠",
  h: "♥",
  d: "♦",
  c: "♣",
};

function parse(code: string) {
  // Accept things like "As", "Td", "Qh", "9c"
  const rank = code.slice(0, -1).toUpperCase();
  const suit = code.slice(-1).toLowerCase();
  return { rank, suit };
}

export default function PlayingCard({ code, size = "md" }: Props) {
  const { rank, suit } = parse(code);
  const isRed = suit === "h" || suit === "d";

  const dim = size === "sm" ? 44 : size === "md" ? 62 : 86;

  return (
    <div
      style={{
        width: dim,
        height: Math.round(dim * 1.4),
        background: "#fff",
        border: "1px solid #999",
        borderRadius: 8,
        boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        padding: 6,
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: 700, color: isRed ? "#c0392b" : "#222" }}>
        {rank}
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: dim / 2,
          color: isRed ? "#c0392b" : "#222",
          lineHeight: 1,
        }}
      >
        {suitGlyph[suit] ?? "?"}
      </div>
      <div
        style={{
          alignSelf: "flex-end",
          transform: "rotate(180deg)",
          color: isRed ? "#c0392b" : "#222",
        }}
      >
        {rank}
      </div>
    </div>
  );
}
