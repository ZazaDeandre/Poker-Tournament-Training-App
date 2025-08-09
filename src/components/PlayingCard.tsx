import React from "react";

type Props = { code: string; size?: "sm" | "md" | "lg" };

function suitGlyph(s: string) {
  switch (s) {
    case "s":
      return "♠";
    case "h":
      return "♥";
    case "d":
      return "♦";
    case "c":
      return "♣";
    default:
      return "";
  }
}

function rankFrom(code: string) {
  if (code === "BACK") return "";
  return code.slice(0, -1).toUpperCase();
}
function suitFrom(code: string) {
  if (code === "BACK") return "";
  return code.slice(-1).toLowerCase();
}

export default function PlayingCard({ code, size = "md" }: Props) {
  const dim = size === "sm" ? 36 : size === "lg" ? 64 : 48;

  // Render a stylized card back when asked
  if (code === "BACK") {
    return (
      <div
        aria-label="Card back"
        style={{
          width: dim,
          height: Math.round(dim * 1.4),
          borderRadius: 8,
          boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
          background:
            "repeating-linear-gradient(45deg, #1b5e20, #1b5e20 6px, #2e7d32 6px, #2e7d32 12px)",
          border: "1px solid #0f3d12",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e8f5e9",
          fontWeight: 700,
          fontSize: dim / 3.2,
          lineHeight: 1,
        }}
      >
        ●
      </div>
    );
  }

  const rank = rankFrom(code);
  const s = suitFrom(code);
  const isRed = s === "h" || s === "d";
  const suit = suitGlyph(s);

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
      title={`${rank}${s.toUpperCase()}`}
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
        {suit}
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
