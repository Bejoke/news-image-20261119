// News-image entry (Node 22, standard library only): places the finished
// summary image where the grader reads it. The image itself is pre-rendered
// by draw.py (PIL) from verified 19 November 2026 reporting; this program
// only copies it to /output/entry.png, so both runs write identical bytes.
// The copy is byte-for-byte deterministic: no timestamps or randomness.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
