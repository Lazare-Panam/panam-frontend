// One-off image optimizer for the SE Ranking ">1 MB image" flags.
//
// The flagged images live on remote hosts (Azure Blob `pblol2` and jsDelivr/GitHub), NOT in this repo,
// so they can't be shrunk from app code — the fix is to re-encode the source files and re-upload them.
// This script downloads each flagged image, compresses it to UNDER 1 MB while KEEPING THE SAME FORMAT
// AND FILENAME (so every existing <img> URL keeps working after you overwrite the originals), and writes
// the results to scripts/optimized/<same path>. It prints a before/after report and flags any that are
// still >1 MB so you can eyeball those.
//
// USAGE (from repo root):
//   npm i -D sharp        # if not already installed
//   node scripts/optimize-images.mjs
// Then upload scripts/optimized/** to the SAME blob paths (azcopy or the Azure portal). The one jsDelivr
// image (quick-connector/PQC4-04-OD-F-SS.png) must be committed to the GitHub `panam-images` repo instead,
// and jsDelivr's cache purged (https://www.jsdelivr.com/tools/purge) or the @main ref will keep serving old.

import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, "optimized")
const MAX_BYTES = 1_000_000 // 1 MB target (the SE Ranking limit)
const START_WIDTH = 1600 // cap longest edge; product covers/photos never display larger than this

const BLOB_BASE = "https://pblol2.blob.core.windows.net/panam-images/"

// Blob-hosted images (path is relative to BLOB_BASE and is also the path you re-upload to).
const BLOB_PATHS = [
  "certs/qms/ISO_14001_2015.png",
  "certs/qms/ISO_45001-2018.png",
  "certs/qms/ISO9001-2015_new.png",
  "products/high-pressure/hp-nv.jpg",
  "products/high-pressure/hp-bv.jpg",
  "products/needle-valves/cover-needle.jpg",
  "products/needle-valves/sb.jpg",
  "products/needle-valves/hb.jpg",
  "products/needle-valves/hp.jpg",
  "products/check-valves/c-cover.png",
  "products/purge-valves/purge-valves.jpg",
  "products/valve-manifolds/2VM/2VM_Cover.jpg",
  "products/valve-manifolds/3VM/3VM_Cover.jpg",
  "products/valve-manifolds/5VM/5VM_Cover.jpg",
  "products/DBB/DBB_fxp.jpg",
  "products/DBB/DBB_fxf.jpg",
  "products/DBB/DBB-pxp.jpg",
  "products/system-integratino/condensate-pots.jpg",
  "products/system-integratino/flange-adaptors.jpg",
  "products/pressure-transmitter/pt-1.jpg",
  "products/pressure-transmitter/pt-2.jpg",
  "industries/david-thielen-R5Ob28wpWzo-unsplash.jpg",
  "certs/type-test/ATEX (1).png",
  "certs/type-test/CE-PED MARKING TUV (1).png",
  "products/high-pressure-pipe-fittings/swivel-union-elbow-hp.png",
  "products/high-pressure-pipe-fittings/male-tee.png",
  "products/high-pressure-pipe-fittings/swivel-union-tee.png",
  "products/high-pressure-pipe-fittings/cross.png",
  "blog/karsten-wurth-ZKWgoRUYuMk-unsplash (1).jpg",
]

// Images hosted elsewhere: { url, out } where `out` is the local path (mirrors the source repo path).
const EXTERNAL = [
  {
    url: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/quick-connector/PQC4-04-OD-F-SS.png",
    out: "products/quick-connector/PQC4-04-OD-F-SS.png",
  },
]

const targets = [
  ...BLOB_PATHS.map(p => ({ url: BLOB_BASE + p.split("/").map(encodeURIComponent).join("/"), out: p })),
  ...EXTERNAL,
]

const kb = n => `${(n / 1024).toFixed(0)} KB`

// Re-encode a buffer to the same format, shrinking width/quality until it fits under MAX_BYTES.
async function compress(input, ext) {
  const isPng = ext === ".png"
  // Try progressively smaller widths, then progressively lower quality, until under the cap.
  for (const width of [START_WIDTH, 1400, 1200, 1000, 800]) {
    for (const quality of isPng ? [90, 80, 70, 60] : [82, 75, 68, 60, 52]) {
      let pipeline = sharp(input).rotate().resize({ width, withoutEnlargement: true })
      pipeline = isPng
        ? pipeline.png({ quality, compressionLevel: 9, effort: 9, palette: true })
        : pipeline.jpeg({ quality, mozjpeg: true })
      const out = await pipeline.toBuffer()
      if (out.length <= MAX_BYTES) return { out, width, quality }
    }
  }
  // Couldn't get under the cap even at the smallest settings — return the smallest attempt.
  const width = 800
  const quality = isPng ? 60 : 52
  const pipeline = isPng
    ? sharp(input).rotate().resize({ width, withoutEnlargement: true }).png({ quality, compressionLevel: 9, effort: 9, palette: true })
    : sharp(input).rotate().resize({ width, withoutEnlargement: true }).jpeg({ quality, mozjpeg: true })
  return { out: await pipeline.toBuffer(), width, quality, overCap: true }
}

const rows = []
let stillOver = 0

for (const { url, out } of targets) {
  const ext = path.extname(out).toLowerCase()
  try {
    const res = await fetch(url)
    if (!res.ok) {
      rows.push(`❌ ${out}  (download HTTP ${res.status})`)
      continue
    }
    const input = Buffer.from(await res.arrayBuffer())
    const { out: optimized, width, quality, overCap } = await compress(input, ext)

    const dest = path.join(OUT_DIR, out)
    await mkdir(path.dirname(dest), { recursive: true })
    await writeFile(dest, optimized)

    const flag = optimized.length > MAX_BYTES ? " ⚠ STILL >1MB" : ""
    if (optimized.length > MAX_BYTES) stillOver++
    rows.push(
      `${overCap ? "⚠" : "✅"} ${out}\n     ${kb(input.length)} → ${kb(optimized.length)}  (w=${width}, q=${quality})${flag}`,
    )
  } catch (e) {
    rows.push(`❌ ${out}  (${e.message})`)
  }
}

console.log("\n=== Image optimization report ===\n")
console.log(rows.join("\n"))
console.log(`\nWrote optimized files to: ${OUT_DIR}`)
console.log(`Re-upload each to its SAME path on the blob (jsDelivr one → GitHub panam-images repo).`)
if (stillOver) console.log(`\n⚠ ${stillOver} image(s) are still over 1 MB at min settings — check those manually.`)
