import React from "react";
import PlayingCard from "./PlayingCard";

type Props = {
  label: string;
  cards?: string[];
  size?: "sm" | "md" | "lg";
};

/**
 * Always renders card graphics.
 * - If `cards` is empty/omitted, render card backs:
 *   - Board rows show 5 backs
 *   - Hand rows show 2 backs
 */
export default function CardRow({ label, cards, size = "md" }: Props) {
  const desired = /board/i.test(label) ? 5 : 2;
  const list =
    cards && cards.length > 0 ? cards : Array.from({ length: desired }, () => "BACK");

  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>{label}</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {list.map((c, i) => (
          <PlayingCard key={`${label}-${i}-${c}`} code={c} size={size} />
        ))}
      </div>
    </div>
  );
}
