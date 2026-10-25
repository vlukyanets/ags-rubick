#!/bin/sh
# Type check the repository, then build it with ags bundle. AGS ships its
# library as TypeScript sources that do not pass tsc on their own, so only
# errors in files of this repository count.
set -eu

cd "$(dirname "$0")/.."

if ! command -v tsc >/dev/null; then
  echo "tsc not found: install the typescript package" >&2
  exit 1
fi

# An error starts at an unindented line with its path; the indented lines
# under it are its details. Paths outside the repository start with ../ or /.
errors=$(tsc -p . --noEmit --pretty false 2>&1 |
  awk '/^[^ ]/ { keep = ($0 !~ /^(\.\.\/|\/)/) } keep') || true

if [ -n "$errors" ]; then
  printf '%s\n' "$errors"
  exit 1
fi

bundle=$(mktemp "${XDG_RUNTIME_DIR:-/tmp}/rubick-check.XXXXXX")
trap 'rm -f "$bundle"' EXIT
ags bundle app.tsx "$bundle"

echo "check passed"
