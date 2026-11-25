// One-line roast of my fridge — entry for the make.fun bounty
// "One Line, One Laugh: Roast Your Fridge".
// Writes exactly one line (1-200 chars) to /output/entry.txt.
// v2: rebuilt after Gate 2 on the first line averaged 68.7 (<70) —
// the lanes agreed its ending was predictable, so this line swaps
// in a sharper twist: the filter light holding the water hostage.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My fridge flashes 'replace filter' like it's holding my water hostage for a ransom I refuse to pay.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

const OUT = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
