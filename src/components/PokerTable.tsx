import React from "react";
import CardRow from "./CardRow";

type Props = {
  hole?: string[];
  board?: string[];
};

export default function PokerTable({ hole, board }: Props) {
  return (
    <div className="table-wrap">
      <div className="table-felt">
        <div className="table-ring" />
        <div className="cards-area">
          <CardRow label="Board" cards={board} size="md" />
          <CardRow label="Your Hand" cards={hole} size="md" />
        </div>
      </div>
    </div>
  );
}
