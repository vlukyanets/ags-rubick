# ags-rubick

Wayland shell for [niri](https://github.com/YaLTeR/niri) built with [AGS](https://github.com/Aylur/ags) v3 (Astal + GTK4 + TypeScript/JSX).

## Requirements

- `aylurs-gtk-shell-git` (AGS v3, pulls in `gjs` and `libastal`)
- `gtk4-layer-shell`
- `dart-sass` — AGS compiles `.scss` with the `sass` binary

## Development

```sh
ags types -u -d .   # generate @girs types and link node_modules (gitignored)
ags run .           # run from the project directory
ags quit -i rubick
ags inspect -i rubick   # GTK inspector
```

## Layout

```
app.tsx            entry point: app.start(), one bar per monitor (follows hotplug)
widget/<name>/     widgets, one directory per window/feature
style/main.scss    stylesheet entry, @use partials from style/_*.scss
```
