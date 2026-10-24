#!/bin/sh
# Install the extensions recommended in .vscode/extensions.json into the
# VS Code profile "ags-rubick", then open the repository with it. VS Code
# remembers the profile and opens this folder with it from then on, so
# the extensions stay out of the other projects.
set -eu

cd "$(dirname "$0")/.."
profile=ags-rubick

extensions=$(sed -n 's/^ *"\([A-Za-z0-9-]*\.[A-Za-z0-9-]*\)",\{0,1\}$/\1/p' \
  .vscode/extensions.json)

for extension in $extensions; do
  code --profile "$profile" --install-extension "$extension"
done

code --profile "$profile" .
