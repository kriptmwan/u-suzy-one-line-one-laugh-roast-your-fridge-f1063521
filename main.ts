// One-line roast of my fridge — entry for the make.fun bounty
// "One Line, One Laugh: Roast Your Fridge".
// Writes exactly one line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My fridge beeps when the door stays open too long, like it is tattling on me to the electric bill.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

const OUT = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
