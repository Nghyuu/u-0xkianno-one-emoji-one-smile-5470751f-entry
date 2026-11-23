import { chmodSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One Emoji, One Smile — copies the single chosen emoji (🤗) to the
// grader's output directory, byte for byte.
const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}
const outFile = join(outDir, "entry.txt");
copyFileSync(join(dir, "entry.txt"), outFile);
// The grader collects outputs as another user, so leave the file
// world-readable (mode 0644) rather than the umask default.
chmodSync(outFile, 0o644);
