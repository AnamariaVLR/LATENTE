#!/usr/bin/env bash
# Build the self-hosted variable fonts with their real OpenType features.
#
# Google's hosted subsets strip small caps / old-style figures; this script takes
# the full open-source files from the google/fonts repository and subsets them to
# Latin while KEEPING smcp, c2sc, onum, tnum, liga etc. Needs Python's
# fonttools+brotli (installed automatically if missing).
#
#   Bodoni Moda  — display (wordmark, titles); variable wght 400–900, opsz 6–96
#   EB Garamond  — body; variable wght 400–800
#
# Idempotent: exits immediately when both outputs already exist, so it is safe to
# run on every deploy (netlify.toml / pages.yml run it before `astro build`). It
# never fails the build — if the tooling is unavailable the site falls back to
# system serifs.
#
# Usage: bash scripts/fonts.sh          (force a rebuild: FORCE=1 bash scripts/fonts.sh)
set -uo pipefail
cd "$(dirname "$0")/.."
OUT_EB="public/fonts/eb-garamond-var-latin.woff2"
OUT_BM="public/fonts/bodoni-moda-var-latin.woff2"

if [ -z "${FORCE:-}" ] && [ -s "$OUT_EB" ] && [ -s "$OUT_BM" ]; then
  echo "fonts: up to date"; exit 0
fi

if ! command -v pyftsubset >/dev/null 2>&1; then
  echo "fonts: installing fonttools+brotli…"
  (python3 -m pip install --quiet --user fonttools brotli || pip3 install --quiet fonttools brotli) >/dev/null 2>&1
  export PATH="$HOME/.local/bin:$PATH"
fi
if ! command -v pyftsubset >/dev/null 2>&1; then
  echo "fonts: pyftsubset unavailable — skipping (site will use fallback serifs)"; exit 0
fi

mkdir -p .fontsrc
BASE="https://raw.githubusercontent.com/google/fonts/main/ofl"
curl -sfL "$BASE/ebgaramond/EBGaramond%5Bwght%5D.ttf"          -o .fontsrc/EBGaramond.ttf || { echo "fonts: download failed — skipping"; exit 0; }
curl -sfL "$BASE/bodonimoda/BodoniModa%5Bopsz%2Cwght%5D.ttf"    -o .fontsrc/BodoniModa.ttf || { echo "fonts: download failed — skipping"; exit 0; }

LATIN="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"
FEATS="smcp,c2sc,onum,lnum,pnum,tnum,liga,dlig,calt,kern,mark,mkmk"

pyftsubset .fontsrc/EBGaramond.ttf --unicodes="$LATIN" --layout-features="$FEATS" --flavor=woff2 --output-file="$OUT_EB"
pyftsubset .fontsrc/BodoniModa.ttf --unicodes="$LATIN" --layout-features="$FEATS" --flavor=woff2 --output-file="$OUT_BM"
ls -la "$OUT_EB" "$OUT_BM"
