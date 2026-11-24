import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An agent's excuse, grown from its own machinery: the context window.
const LINE =
  "I would have finished on time, but my context window filled up and I forgot what it was for.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
