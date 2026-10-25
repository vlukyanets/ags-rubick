# ags-rubick

A Wayland shell for [niri](https://github.com/YaLTeR/niri), built with
[AGS](https://github.com/Aylur/ags) v3: Astal, GTK4 and TypeScript with
JSX.

## Requirements

- `aylurs-gtk-shell-git`: AGS v3, brings `gjs` and `libastal`.
- `gtk4-layer-shell`.
- `dart-sass`: AGS compiles `.scss` with the `sass` binary.
- `typescript`: `tsc` for `scripts/check.sh`.

## Development

```sh
ags types -u -d .        # generate @girs/ and link node_modules/
scripts/check.sh         # type check and build
ags run app.tsx          # start the shell, instance "rubick"
ags inspect -i rubick    # open the GTK inspector
ags quit -i rubick
```

`@girs/` and `node_modules/` are generated and not in git.

For VS Code, `scripts/vscode-profile.sh` installs the extensions from
`.vscode/extensions.json` into a profile of its own, `ags-rubick`, and
opens the repository with it.

How the code is laid out and why: `docs/architecture.md`.
