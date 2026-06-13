import fs from "node:fs";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

const [referencePath, candidatePath, diffPath] = process.argv.slice(2);

if (!referencePath || !candidatePath || !diffPath) {
  console.error(
    "Usage: node scripts/compare-screenshot.mjs <reference> <candidate> <diff>"
  );
  process.exit(1);
}

const reference = PNG.sync.read(fs.readFileSync(referencePath));
const candidate = PNG.sync.read(fs.readFileSync(candidatePath));

if (reference.width !== candidate.width || reference.height !== candidate.height) {
  console.error(
    `Dimension mismatch: reference ${reference.width}x${reference.height}, candidate ${candidate.width}x${candidate.height}`
  );
  process.exit(1);
}

if (candidate.width !== 1055 || candidate.height !== 1491) {
  console.error(`Candidate must be 1055x1491, got ${candidate.width}x${candidate.height}`);
  process.exit(1);
}

const diff = new PNG({ width: reference.width, height: reference.height });
const mismatchPixels = pixelmatch(
  reference.data,
  candidate.data,
  diff.data,
  reference.width,
  reference.height,
  { threshold: 0.08 }
);
const totalPixels = reference.width * reference.height;
const percentage = (mismatchPixels / totalPixels) * 100;

fs.mkdirSync(new URL("../ai/sprints/initial-sprint/validation/", import.meta.url), {
  recursive: true
});
fs.writeFileSync(diffPath, PNG.sync.write(diff));

console.log(`Mismatch pixels: ${mismatchPixels}`);
console.log(`Mismatch percent: ${percentage.toFixed(4)}%`);
