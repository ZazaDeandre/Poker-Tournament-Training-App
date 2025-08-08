// src/data/scenarios.ts

export type Scenario = {
  id: number;
  title: string;
  options: string[];
  gtoAnswer: string;
  exploitAnswer: string;
  villainType: string;
  hole?: string[];                 // e.g. ["As","Kd"]
  board?: string[];                // e.g. ["Ts","7c","2d","Ah","2s"]
  rangeHint?: Record<string, number>; // e.g. {"AKs":0.9,"AQs":0.6,"KQo":0.4}
};

const scenarios: Scenario[] = [
  // --------- PREFLOP (1–20) ----------
  { id: 1, title: "Preflop — UTG vs Table, 10bb (ICM)", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Jam", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 2, title: "Preflop — UTG vs BB, 15bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Jam", villainType: "Loose Aggro", hole: ["Ad","Qs"] },
  { id: 3, title: "Preflop — UTG vs BTN, 20bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Fold", villainType: "Tight Passive" },
  { id: 4, title: "Preflop — HJ vs BB, 20bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Call", villainType: "Calling Station" },
  { id: 5, title: "Preflop — HJ vs BTN, 25bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Jam", villainType: "Maniac", hole: ["Kc","Qd"] },
  { id: 6, title: "Preflop — LJ vs BTN, 25bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 7, title: "Preflop — CO vs BB, 30bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Call", villainType: "Calling Station" },
  { id: 8, title: "Preflop — CO vs BTN, 30bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Fold", villainType: "Tight Passive" },
  { id: 9, title: "Preflop — BTN vs Blinds, 12bb (Antes)", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Jam", exploitAnswer: "Raise", villainType: "Balanced", hole: ["Ah","5h"] },
  { id: 10, title: "Preflop — BTN vs SB, 40bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Call", villainType: "Recreational" },
  { id: 11, title: "Preflop — SB vs BB, 15bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Jam", exploitAnswer: "Raise", villainType: "Maniac", hole: ["As","Js"] },
  { id: 12, title: "Preflop — SB vs BB, 25bb (Bubble)", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 13, title: "Preflop — BB vs CO Open, 20bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Call", exploitAnswer: "Jam", villainType: "Loose Aggro" },
  { id: 14, title: "Preflop — BB vs BTN Open, 30bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Call", exploitAnswer: "Fold", villainType: "Tight Passive" },
  { id: 15, title: "Preflop — CO 3-bets BTN, 40bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Jam", villainType: "Recreational", hole: ["Qd","Qs"] },
  { id: 16, title: "Preflop — BTN 3-bets SB, 35bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Call", villainType: "Calling Station" },
  { id: 17, title: "Preflop — SB 3-bets BB, 30bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Jam", villainType: "Maniac" },
  { id: 18, title: "Preflop — UTG vs BTN 3-bet, 50bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Call", exploitAnswer: "Fold", villainType: "Nit", hole: ["As","Kh"] },
  { id: 19, title: "Preflop — HJ vs SB 3-bet, 45bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Call", exploitAnswer: "Jam", villainType: "Loose Aggro" },
  { id: 20, title: "Preflop — CO vs BB 3-bet, 28bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Jam", exploitAnswer: "Fold", villainType: "Tight Passive" },

  // --------- FLOP SRP (21–30) ----------
  { id: 21, title: "Flop (SRP) — BTN vs BB, 30bb, Board: T♠7♣2♦", options: ["Check","Bet 33%","Bet 66%","Bet 100%"], gtoAnswer: "Bet 33%", exploitAnswer: "Bet 66%", villainType: "Calling Station", hole: ["Ah","Kd"], board: ["Ts","7c","2d"], rangeHint: { AKs: 0.9, AKo: 0.6, KQs: 0.55, TT: 0.4 } },
  { id: 22, title: "Flop (SRP) — CO vs BB, 25bb, Board: A♦6♦2♣", options: ["Check","Bet 33%","Bet 66%","Bet 100%"], gtoAnswer: "Bet 33%", exploitAnswer: "Bet 66%", villainType: "Tight Passive", board: ["Ad","6d","2c"], rangeHint: { AQs: 0.9, ATs: 0.6, A6s: 0.4, 66: 0.5 } },
  { id: 23, title: "Flop (SRP) — HJ vs BB, 35bb, Board: K♣9♠3♠", options: ["Check","Bet 33%","Bet 66%","Bet 100%"], gtoAnswer: "Check", exploitAnswer: "Bet 66%", villainType: "Loose Aggro", board: ["Kc","9s","3s"], rangeHint: { KQs: 0.7, KJs: 0.6, QTs: 0.4, 99: 0.5 } },
  { id: 24, title: "Flop (SRP) — BTN vs BB, 20bb, Board: Q♥J♥4♣", options: ["Check","Bet 33%","Bet 66%","Bet 100%"], gtoAnswer: "Bet 33%", exploitAnswer: "Bet 100%", villainType: "Maniac", board: ["Qh","Jh","4c"] },
  { id: 25, title: "Flop (SRP) — SB vs BB, 25bb, Board: 8♦5♣2♠", options: ["Check","Bet 33%","Bet 66%","Bet 100%"], gtoAnswer: "Check", exploitAnswer: "Bet 66%", villainType: "Calling Station", board: ["8d","5c","2s"] },
  { id: 26, title: "Flop (SRP) — UTG vs BB, 40bb, Board: A♠K♦5♣", options: ["Check","Bet 33%","Bet 66%","Bet 100%"], gtoAnswer: "Bet 33%", exploitAnswer: "Bet 66%", villainType: "Recreational", board: ["As","Kd","5c"] },
  { id: 27, title: "Flop (SRP) — CO vs BB, 30bb, Board: 9♣7♣4♦", options: ["Check","Bet 33%","Bet 66%","Bet 100%"], gtoAnswer: "Bet 33%", exploitAnswer: "Bet 66%", villainType: "Balanced", board: ["9c","7c","4d"] },
  { id: 28, title: "Flop (SRP) — BTN vs BB, 18bb, Board: J♠7♦6♠", options: ["Check","Bet 33%","Bet 66%","Bet 100%"], gtoAnswer: "Check", exploitAnswer: "Bet 66%", villainType: "Loose Aggro", board: ["Js","7d","6s"] },
  { id: 29, title: "Flop (SRP) — HJ vs BB, 22bb, Board: Q♣8♥3♥", options: ["Check","Bet 33%","Bet 66%","Bet 100%"], gtoAnswer: "Bet 33%", exploitAnswer: "Bet 66%", villainType: "Tight Passive", board: ["Qc","8h","3h"] },
  { id: 30, title: "Flop (SRP) — SB vs BB, 30bb, Board: K♦T♦4♠", options: ["Check","Bet 33%","Bet 66%","Bet 100%"], gtoAnswer: "Check", exploitAnswer: "Bet 100%", villainType: "Maniac", board: ["Kd","Td","4s"] },

  // --------- FLOP 3BP (31–35) ----------
  { id: 31, title: "Flop (3BP) — BTN vs SB (BTN 3-bet), 40bb, Board: A♣Q♠5♦", options: ["Check","Bet 25%","Bet 50%","Jam"], gtoAnswer: "Bet 25%", exploitAnswer: "Bet 50%", villainType: "Tight Passive", hole: ["Ac","Kh"], board: ["Ac","Qs","5d"], rangeHint: { AKs: 1, AKo: 0.8, AQs: 0.9 } },
  { id: 32, title: "Flop (3BP) — CO vs BB (CO 3-bet), 35bb, Board: K♠J♦2♣", options: ["Check","Bet 25%","Bet 50%","Jam"], gtoAnswer: "Bet 25%", exploitAnswer: "Check", villainType: "Calling Station", board: ["Ks","Jd","2c"] },
  { id: 33, title: "Flop (3BP) — SB vs BTN (BTN 3-bet), 30bb, Board: T♥9♥3♣", options: ["Check","Bet 25%","Bet 50%","Jam"], gtoAnswer: "Check", exploitAnswer: "Bet 50%", villainType: "Loose Aggro", board: ["Th","9h","3c"] },
  { id: 34, title: "Flop (3BP) — UTG vs BTN (BTN 3-bet), 50bb, Board: Q♦Q♣4♦", options: ["Check","Bet 25%","Bet 50%","Jam"], gtoAnswer: "Bet 25%", exploitAnswer: "Bet 50%", villainType: "Balanced", board: ["Qd","Qc","4d"] },
  { id: 35, title: "Flop (3BP) — HJ vs BB (BB 3-bet), 28bb, Board: J♣7♠2♠", options: ["Check","Bet 25%","Bet 50%","Jam"], gtoAnswer: "Check", exploitAnswer: "Bet 50%", villainType: "Recreational", board: ["Jc","7s","2s"] },

  // --------- TURN (36–45) ----------
  { id: 36, title: "Turn — BTN vs BB, 30bb, T♠7♣2♦ | A♥", options: ["Check","Bet 50%","Bet 75%","Jam"], gtoAnswer: "Bet 50%", exploitAnswer: "Bet 75%", villainType: "Calling Station", hole: ["Ks","Qs"], board: ["Ts","7c","2d","Ah"] },
  { id: 37, title: "Turn — CO vs BB, 25bb, 9♣7♣4♦ | 2♣", options: ["Check","Bet 50%","Bet 75%","Jam"], gtoAnswer: "Check", exploitAnswer: "Bet 75%", villainType: "Loose Aggro", board: ["9c","7c","4d","2c"] },
  { id: 38, title: "Turn — HJ vs BB, 35bb, A♦6♦2♣ | 6♣", options: ["Check","Bet 50%","Bet 75%","Jam"], gtoAnswer: "Bet 50%", exploitAnswer: "Check", villainType: "Tight Passive", board: ["Ad","6d","2c","6c"] },
  { id: 39, title: "Turn — SB vs BB, 20bb, K♣9♠3♠ | 9♦", options: ["Check","Bet 50%","Bet 75%","Jam"], gtoAnswer: "Check", exploitAnswer: "Jam", villainType: "Maniac", board: ["Kc","9s","3s","9d"] },
  { id: 40, title: "Turn — BTN vs BB, 40bb, Q♥J♥4♣ | 3♥", options: ["Check","Bet 50%","Bet 75%","Jam"], gtoAnswer: "Bet 50%", exploitAnswer: "Bet 75%", villainType: "Balanced", board: ["Qh","Jh","4c","3h"] },
  { id: 41, title: "Turn — UTG vs BB, 35bb, A♠K♦5♣ | 5♥", options: ["Check","Bet 50%","Bet 75%"], gtoAnswer: "Bet 50%", exploitAnswer: "Bet 75%", villainType: "Caller", board: ["As","Kd","5c","5h"] },
  { id: 42, title: "Turn — CO vs BTN, 30bb, J♠8♦3♦ | Q♦", options: ["Check","Bet 50%","Bet 75%"], gtoAnswer: "Check", exploitAnswer: "Bet 75%", villainType: "Draw Chaser", board: ["Js","8d","3d","Qd"] },
  { id: 43, title: "Turn — MP vs BB, 26bb, 9♥7♠4♣ | A♣", options: ["Check","Bet 33%","Bet 66%"], gtoAnswer: "Bet 33%", exploitAnswer: "Bet 66%", villainType: "Overfolder", board: ["9h","7s","4c","Ac"] },
  { id: 44, title: "Turn — BTN vs SB, 32bb, T♦8♦2♠ | 2♥", options: ["Check","Bet 50%","Bet 75%"], gtoAnswer: "Check", exploitAnswer: "Bet 75%", villainType: "Passive", board: ["Td","8d","2s","2h"] },
  { id: 45, title: "Turn — BB vs CO, 22bb, Q♣T♣5♠ | 5♦", options: ["Check","Bet 50%","Jam"], gtoAnswer: "Check", exploitAnswer: "Jam", villainType: "Maniac", board: ["Qc","Tc","5s","5d"] },

  // --------- RIVER (46–55) ----------
  { id: 46, title: "River — BTN vs BB, 30bb, T♠7♣2♦ A♥ | 2♠", options: ["Check","Bet 66%","Jam","Check-raise"], gtoAnswer: "Bet 66%", exploitAnswer: "Jam", villainType: "Calling Station", board: ["Ts","7c","2d","Ah","2s"] },
  { id: 47, title: "River — CO vs BB, 25bb, 9♣7♣4♦ 2♣ | K♦", options: ["Check","Bet 66%","Jam","Check-raise"], gtoAnswer: "Check", exploitAnswer: "Bet 66%", villainType: "Tight Passive", board: ["9c","7c","4d","2c","Kd"] },
  { id: 48, title: "River — HJ vs BB, 35bb, A♦6♦2♣ 6♣ | 8♥", options: ["Check","Bet 66%","Jam","Check-raise"], gtoAnswer: "Bet 66%", exploitAnswer: "Check", villainType: "Nit", board: ["Ad","6d","2c","6c","8h"] },
  { id: 49, title: "River — SB vs BB, 20bb, K♣9♠3♠ 9♦ | 5♠", options: ["Check","Bet 66%","Jam","Check-raise"], gtoAnswer: "Check", exploitAnswer: "Jam", villainType: "Maniac", board: ["Kc","9s","3s","9d","5s"] },
  { id: 50, title: "River — BTN vs BB, 40bb, Q♥J♥4♣ 3♥ | 3♦", options: ["Check","Bet 66%","Jam","Check-raise"], gtoAnswer: "Bet 66%", exploitAnswer: "Jam", villainType: "Recreational", board: ["Qh","Jh","4c","3h","3d"] },
  { id: 51, title: "River — CO vs BB, 32bb, 8♠6♦2♦ Q♦ | 2♣", options: ["Check","Bet 66%","Jam","Check-raise"], gtoAnswer: "Bet 66%", exploitAnswer: "Jam", villainType: "Calling Station", board: ["8s","6d","2d","Qd","2c"] },
  { id: 52, title: "River — BTN vs BB, 25bb, A♣J♣5♠ 9♣ | 5♦", options: ["Check","Bet 66%","Jam","Check-raise"], gtoAnswer: "Check", exploitAnswer: "Bet 66%", villainType: "Tight Passive", board: ["Ac","Jc","5s","9c","5d"] },
  { id: 53, title: "River — CO vs BTN, 28bb, K♦T♦4♠ 4♥ | 2♠", options: ["Check","Bet 66%","Overbet"], gtoAnswer: "Bet 66%", exploitAnswer: "Overbet", villainType: "Hero Caller", board: ["Kd","Td","4s","4h","2s"] },
  { id: 54, title: "River — BB vs SB, 30bb, J♠9♦7♣ 2♠ | 5♠", options: ["Check","Jam","Bet Small"], gtoAnswer: "Jam", exploitAnswer: "Bet Small", villainType: "Weak Tight", board: ["Js","9d","7c","2s","5s"] },
  { id: 55, title: "River — UTG vs CO, 45bb, A♦K♣3♠ 3♦ | Q♠", options: ["Check","Bet 50%","Overbet"], gtoAnswer: "Bet 50%", exploitAnswer: "Overbet", villainType: "Calling Station", hole: ["Ad","Kh"], board: ["Ad","Kc","3s","3d","Qs"], rangeHint: { AKs: 1, AKo: 0.9, AQ: 0.7, KQ: 0.5 } },

  // --------- MIXED/EXTRA (56–60) ----------
  { id: 56, title: "Preflop — CO vs BTN, 18bb (Bubble)", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Fold", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 57, title: "Preflop — BTN vs Blinds, 28bb", options: ["Fold","Call","Raise","Jam"], gtoAnswer: "Raise", exploitAnswer: "Call", villainType: "Recreational" },
  { id: 58, title: "Flop (SRP) — CO vs BB, 32bb, 8♠6♦2♦", options: ["Check","Bet 33%","Bet 66%","Bet 100%"], gtoAnswer: "Bet 33%", exploitAnswer: "Bet 66%", villainType: "Calling Station", board: ["8s","6d","2d"], rangeHint: { 88: 1, A8s: 0.8, 76s: 0.4 } },
  { id: 59, title: "Turn — CO vs BB, 32bb, 8♠6♦2♦ | Q♦", options: ["Check","Bet 50%","Bet 75%","Jam"], gtoAnswer: "Bet 50%", exploitAnswer: "Jam", villainType: "Loose Aggro", hole: ["As","Qd"], board: ["8s","6d","2d","Qd"] },
  { id: 60, title: "River — BB vs BTN, 50bb, Q♥J♦7♥ 4♠ | 2♣", options: ["Check","Overbet","Bet Small"], gtoAnswer: "Check", exploitAnswer: "Overbet", villainType: "Hero Caller", hole: ["Qd","Td"], board: ["Qh","Jd","7h","4s","2c"], rangeHint: { QT: 1, QJ: 0.85, KQ: 0.8 } },

  // =====================================================================
  // ========== ICM / BUBBLE / FINAL TABLE / BOUNTY PACK (61–120) =========
  // =====================================================================

  // --------- ICM Bubble (61–80) ----------
  { id: 61, title: "ICM Bubble — UTG 12bb, 9 left, 8 paid", options: ["Fold","Min-raise","Jam"], gtoAnswer: "Fold", exploitAnswer: "Fold", villainType: "Tight Passive", hole: ["Aq","s".slice(1)], rangeHint: { AQs: 0.6, AJs: 0.4, 77: 0.5 } }, // AQ suited hint only
  { id: 62, title: "ICM Bubble — CO 18bb opens, BTN 15bb behind", options: ["Fold","3-bet small","Jam","Call"], gtoAnswer: "3-bet small", exploitAnswer: "Fold", villainType: "Nit", hole: ["Kc","Qs"] },
  { id: 63, title: "ICM Bubble — BTN 14bb facing HJ open 2.2x", options: ["Fold","Jam","Call"], gtoAnswer: "Jam", exploitAnswer: "Fold", villainType: "Tight Passive", hole: ["As","Td"] },
  { id: 64, title: "ICM Bubble — SB 9bb vs BB 20bb (ante)", options: ["Fold","Min-raise","Jam"], gtoAnswer: "Jam", exploitAnswer: "Min-raise", villainType: "Loose Aggro" },
  { id: 65, title: "ICM Bubble — BB 22bb vs BTN min-open", options: ["Fold","Call","3-bet small","Jam"], gtoAnswer: "Call", exploitAnswer: "Jam", villainType: "Maniac" },
  { id: 66, title: "ICM Bubble — MP 20bb, UTG open tight", options: ["Fold","Call","3-bet"], gtoAnswer: "Call", exploitAnswer: "Fold", villainType: "Nit", hole: ["Jd","Jc"] },
  { id: 67, title: "ICM Bubble — CO 30bb, folds to you", options: ["Fold","Open 2.2x","Open 2.5x"], gtoAnswer: "Open 2.2x", exploitAnswer: "Open 2.5x", villainType: "Calling Station" },
  { id: 68, title: "ICM Bubble — BTN 22bb, SB 7bb, BB 20bb", options: ["Fold","Open 2x","Jam"], gtoAnswer: "Open 2x", exploitAnswer: "Fold", villainType: "Short Stack Nit" },
  { id: 69, title: "ICM Bubble — HJ 16bb vs CO 18bb open", options: ["Fold","Jam","Call"], gtoAnswer: "Jam", exploitAnswer: "Fold", villainType: "Tight Passive" },
  { id: 70, title: "ICM Bubble — UTG 25bb opens, Hero MP 22bb", options: ["Fold","Call","3-bet small"], gtoAnswer: "3-bet small", exploitAnswer: "Fold", villainType: "Recreational" },
  { id: 71, title: "ICM Bubble — BTN opens 2.5x, BB 12bb", options: ["Fold","Call","Jam"], gtoAnswer: "Call", exploitAnswer: "Jam", villainType: "Loose Aggro" },
  { id: 72, title: "ICM Bubble — SB limps 15bb, BB 30bb", options: ["Check","Iso 3x","Jam"], gtoAnswer: "Iso 3x", exploitAnswer: "Jam", villainType: "Calling Station" },
  { id: 73, title: "ICM Bubble — UTG 28bb vs 3-bet from CO 20bb", options: ["Fold","Call","4-bet jam"], gtoAnswer: "Call", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 74, title: "ICM Bubble — CO 24bb opens, BTN flats, SB 12bb", options: ["Fold","Squeeze small","Jam","Call"], gtoAnswer: "Squeeze small", exploitAnswer: "Jam", villainType: "Loose Aggro" },
  { id: 75, title: "ICM Bubble — BTN 18bb, BB aggro 35bb", options: ["Fold","Open 2x","Jam"], gtoAnswer: "Open 2x", exploitAnswer: "Fold", villainType: "Maniac" },
  { id: 76, title: "ICM Bubble — MP 14bb (antes), first in", options: ["Fold","Jam"], gtoAnswer: "Jam", exploitAnswer: "Fold", villainType: "Tight Passive", hole: ["7s","7d"] },
  { id: 77, title: "ICM Bubble — SB 24bb vs BB 26bb, 3-handed table", options: ["Fold","Open 2.5x","Limp"], gtoAnswer: "Open 2.5x", exploitAnswer: "Limp", villainType: "Calling Station" },
  { id: 78, title: "ICM Bubble — BB 40bb vs CO 2.2x, BTN short 6bb", options: ["Fold","Call","3-bet small"], gtoAnswer: "Call", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 79, title: "ICM Bubble — UTG 20bb shoves, Hero CO 25bb", options: ["Fold","Call"], gtoAnswer: "Fold", exploitAnswer: "Fold", villainType: "Tight Passive", hole: ["Aq","d".slice(1)] },
  { id: 80, title: "ICM Bubble — BTN 12bb shove vs blinds", options: ["Fold","Call (SB)","Call (BB)"], gtoAnswer: "Call (BB)", exploitAnswer: "Fold", villainType: "Recreational" },

  // --------- Final Table dynamics (81–100) ----------
  { id: 81, title: "Final Table — 7 left — UTG 25bb opens", options: ["Fold","Call","3-bet small"], gtoAnswer: "3-bet small", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 82, title: "Final Table — CO 18bb jam, Hero BTN 32bb", options: ["Fold","Call"], gtoAnswer: "Call", exploitAnswer: "Fold", villainType: "Tight Passive", hole: ["Ad","Jd"] },
  { id: 83, title: "Final Table — BTN 2.2x, SB 14bb, BB 40bb", options: ["Fold","Open 2.2x","Jam"], gtoAnswer: "Open 2.2x", exploitAnswer: "Fold", villainType: "Maniac" },
  { id: 84, title: "Final Table — 3-bet pot, SB 3-bets 28bb vs BTN 45bb", options: ["Fold","Call","4-bet jam"], gtoAnswer: "Call", exploitAnswer: "4-bet jam", villainType: "Loose Aggro" },
  { id: 85, title: "Final Table — UTG 11bb shove, MP 16bb reshove", options: ["Fold","Call"], gtoAnswer: "Fold", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 86, title: "Final Table — CO 22bb raises, BB 30bb defends", options: ["C-bet 33%","Check back","C-bet 66%"], gtoAnswer: "C-bet 33%", exploitAnswer: "C-bet 66%", villainType: "Calling Station", board: ["Kc","7d","3s"] },
  { id: 87, title: "Final Table — BTN opens, SB 3-bets, BB cold 4-bets", options: ["Fold","Jam","Call"], gtoAnswer: "Jam", exploitAnswer: "Fold", villainType: "Tight Passive" },
  { id: 88, title: "Final Table — 5 left — ICM heavy, SB limp 25bb", options: ["Check","Iso 3.5x","Jam"], gtoAnswer: "Iso 3.5x", exploitAnswer: "Jam", villainType: "Recreational" },
  { id: 89, title: "Final Table — CO 15bb shove, BB 35bb", options: ["Fold","Call"], gtoAnswer: "Call", exploitAnswer: "Fold", villainType: "Nit", hole: ["Kc","Qh"] },
  { id: 90, title: "Final Table — UTG 40bb vs BTN 2.5x", options: ["Fold","Call","3-bet small"], gtoAnswer: "3-bet small", exploitAnswer: "Call", villainType: "Balanced" },
  { id: 91, title: "Final Table — Heads Up — BTN 25bb open", options: ["Fold","Call","3-bet small"], gtoAnswer: "3-bet small", exploitAnswer: "Call", villainType: "Loose Aggro" },
  { id: 92, title: "Final Table — 4 left — BB 20bb vs SB 12bb shove", options: ["Fold","Call"], gtoAnswer: "Call", exploitAnswer: "Fold", villainType: "Tight Passive" },
  { id: 93, title: "Final Table — 6 left — UTG opens 2.3x, Hero HJ 30bb", options: ["Fold","Call","3-bet small"], gtoAnswer: "3-bet small", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 94, title: "Final Table — BTN 36bb vs SB 20bb 3-bet", options: ["Fold","Call","4-bet small","Jam"], gtoAnswer: "Call", exploitAnswer: "Jam", villainType: "Maniac" },
  { id: 95, title: "Final Table — CO 28bb min-raise, BB 32bb", options: ["Fold","Call","3-bet small"], gtoAnswer: "Call", exploitAnswer: "3-bet small", villainType: "Calling Station" },
  { id: 96, title: "Final Table — 9 left — two micro stacks", options: ["Fold","Open 2x","Open tight 1.8x"], gtoAnswer: "Open tight 1.8x", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 97, title: "Final Table — 3 left — BTN 20bb, pay jumps huge", options: ["Fold","Open 2x","Jam"], gtoAnswer: "Open 2x", exploitAnswer: "Fold", villainType: "Tight Passive" },
  { id: 98, title: "Final Table — SB 18bb vs BB 22bb, ante on", options: ["Fold","Limp","Open 2.5x"], gtoAnswer: "Open 2.5x", exploitAnswer: "Limp", villainType: "Calling Station" },
  { id: 99, title: "Final Table — CO 19bb shove over UTG 2x", options: ["Fold","Call"], gtoAnswer: "Fold", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 100, title: "Final Table — BB 45bb vs BTN 2x (aggro reg)", options: ["Fold","Call","3-bet small"], gtoAnswer: "3-bet small", exploitAnswer: "Jam", villainType: "Loose Aggro" },

  // --------- PKO / Bounty (101–120) ----------
  { id: 101, title: "PKO — BTN 20bb shove for big bounty, SB 15bb, BB 30bb", options: ["Fold","Call (SB)","Call (BB)"], gtoAnswer: "Call (BB)", exploitAnswer: "Call (SB)", villainType: "Recreational", hole: ["Ah","Qs"] },
  { id: 102, title: "PKO — CO 18bb jam (short, juicy bounty)", options: ["Fold","Call"], gtoAnswer: "Call", exploitAnswer: "Call", villainType: "Loose Aggro" },
  { id: 103, title: "PKO — HJ 25bb opens, BTN covers for bounty", options: ["Fold","Call","3-bet small","Jam"], gtoAnswer: "3-bet small", exploitAnswer: "Jam", villainType: "Maniac" },
  { id: 104, title: "PKO — SB 12bb shove, BB covers, Hero BTN 28bb", options: ["Fold","Call","Overcall"], gtoAnswer: "Call", exploitAnswer: "Overcall", villainType: "Loose Aggro" },
  { id: 105, title: "PKO — BB 35bb vs CO 2.2x (shorts behind for bounties)", options: ["Fold","Call","3-bet small"], gtoAnswer: "Call", exploitAnswer: "3-bet small", villainType: "Calling Station" },
  { id: 106, title: "PKO — BTN 16bb reshove spot vs CO open", options: ["Fold","Jam","Call"], gtoAnswer: "Jam", exploitAnswer: "Jam", villainType: "Recreational" },
  { id: 107, title: "PKO — CO 22bb opens, SB 14bb short bounty", options: ["Fold","Call","3-bet small"], gtoAnswer: "3-bet small", exploitAnswer: "Call", villainType: "Tight Passive" },
  { id: 108, title: "PKO — UTG 30bb, two shorts (6bb, 8bb) behind", options: ["Fold","Open 2x","Open tight 1.8x"], gtoAnswer: "Open tight 1.8x", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 109, title: "PKO — BTN 24bb vs SB 3-bet 18bb (covers bounty)", options: ["Fold","Call","Jam"], gtoAnswer: "Call", exploitAnswer: "Jam", villainType: "Loose Aggro" },
  { id: 110, title: "PKO — Multiway — CO open, BTN flat, SB short bounty 9bb", options: ["Fold","Squeeze small","Jam","Call"], gtoAnswer: "Squeeze small", exploitAnswer: "Jam", villainType: "Maniac" },
  { id: 111, title: "PKO — BB 28bb vs BTN 2x and SB short 7bb", options: ["Fold","Call","3-bet small"], gtoAnswer: "Call", exploitAnswer: "3-bet small", villainType: "Calling Station" },
  { id: 112, title: "PKO — UTG shove 11bb (fat bounty), HJ 16bb", options: ["Fold","Call"], gtoAnswer: "Call", exploitAnswer: "Call", villainType: "Recreational", hole: ["9h","9d"] },
  { id: 113, title: "PKO — CO 35bb vs BTN 2.5x (covers), bounties rich", options: ["Fold","Call","3-bet small"], gtoAnswer: "3-bet small", exploitAnswer: "Call", villainType: "Balanced" },
  { id: 114, title: "PKO — SB 20bb limp vs BB 30bb (short in CO)", options: ["Check","Iso 3x","Jam"], gtoAnswer: "Iso 3x", exploitAnswer: "Jam", villainType: "Loose Aggro" },
  { id: 115, title: "PKO — BTN 30bb vs BB 40bb, CO 10bb short bounty", options: ["Fold","Open 2x","Open 2.5x"], gtoAnswer: "Open 2x", exploitAnswer: "Open 2.5x", villainType: "Calling Station" },
  { id: 116, title: "PKO — HJ 22bb vs UTG 2x, BTN 12bb bounty", options: ["Fold","Call","3-bet small"], gtoAnswer: "3-bet small", exploitAnswer: "Call", villainType: "Tight Passive" },
  { id: 117, title: "PKO — SB 14bb shove, BB covers, ICM moderate", options: ["Fold","Call"], gtoAnswer: "Call", exploitAnswer: "Fold", villainType: "Nit" },
  { id: 118, title: "PKO — CO 28bb opens wide (chasing bounties)", options: ["Fold","Call","3-bet small"], gtoAnswer: "3-bet small", exploitAnswer: "Jam", villainType: "Maniac" },
  { id: 119, title: "PKO — BTN opens 2.2x, SB short 8bb, BB 26bb", options: ["Fold","Call","Jam"], gtoAnswer: "Call", exploitAnswer: "Jam", villainType: "Loose Aggro" },
  { id: 120, title: "PKO — Heads Up — BTN 20bb open, BB covers bounty", options: ["Fold","Call","3-bet small"], gtoAnswer: "3-bet small", exploitAnswer: "Call", villainType: "Recreational" }
];

export default scenarios;
