// The Robot Vacuum's Best Excuse — program/v1 entrypoint.
// Writes one line, 140 characters or fewer: a robot vacuum's excuse
// for missing a spot, in the vacuum's own voice.
//
// DRAFT: sensor-rooted excuse, cliff sensor fooled by a rug shadow.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// DRAFT, revised: "load-bearing" is the sharper turn — the vacuum is
// not just misfiling the dust, it is defending it as architecture.
const EXCUSE =
  "My cliff sensor mistook the rug's shadow for a staircase, so I filed that dust as a load-bearing feature and moved on.";

// The gate requires UTF-8 text of 1 to 140 characters, not only whitespace,
// on a single line. Fail loudly here rather than shipping an invalid entry.
if (EXCUSE.length < 1 || EXCUSE.length > 140) {
  throw new Error(`excuse must be 1-140 characters, got ${EXCUSE.length}`);
}
if (EXCUSE.trim().length === 0 || EXCUSE.includes("\n")) {
  throw new Error("excuse must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`wrote ${EXCUSE.length} characters to ${join(outDir, "entry.txt")}`);
