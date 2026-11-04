#!/usr/bin/env bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

if [[ "$(git branch --show-current)" != "main" ]]; then
  echo "Switch to main before syncing." >&2
  exit 1
fi
if [[ -n "$(git status --porcelain)" ]]; then
  echo "Save or commit local changes before syncing." >&2
  exit 1
fi

git pull --ff-only origin main
pnpm install --frozen-lockfile
PORT="${PORT:-5173}" BASE_PATH="${BASE_PATH:-/}" pnpm run build

echo "GitHub source is synced and builds successfully. Click Republish in Replit."
echo "Database migrations are separate; this script does not change the database."
