# AGENTS.md

ags-rubick is the owner's own Wayland shell for the niri compositor: a
bar, a launcher and the other surfaces around the windows. It is built
with AGS v3 (Astal, GTK4, TypeScript with JSX) and runs as one `gjs`
process, the instance `rubick`.

The project is a prototype: get the smallest version working end to end,
then harden it. Working code beats documents.

## Layout

- `app.tsx`: the entry point; starts the app and the windows.
- `widget/<name>/`: one directory per window or feature.
- `service/`: state from outside the shell, such as niri; widgets only
  bind to it.
- `style/`: `main.scss` and its partials `_*.scss`.
- `docs/architecture.md`: how the parts fit together, the invariants and
  the decisions. Read it before changing the structure.

## Commands

- `ags types -u -d .`: generate `@girs/` and link `node_modules/` after
  a fresh checkout or an AGS update.
- `scripts/check.sh`: type check of our files, then a build of the code
  and the styles. Run it before saying a change works.
- `ags run app.tsx`, then `ags quit -i rubick`: try it by hand. It puts a
  real bar on the owner's screens; `niri msg --json layers` lists it.

## How to work

- Work comes from a GitHub issue (`gh issue view N`). Build to its
  acceptance criteria. When it is done, move what stays true into
  `docs/`.
- Use library defaults. Add a setting, constant or timeout only when
  something breaks without it.
- Done means `scripts/check.sh` passed and `ags run` showed the change.
  If a check failed or could not run, say so and show its output.
- Keep changes small: one topic per branch.
- Read and change files with the file tools (Read, Edit, Write), not
  shell commands: no `cat`, `sed -i`, `echo >` or heredocs. Delete only
  with `git rm`, after asking.

## Ask the owner first

Bring these as 2-3 options with a recommendation, and wait for a yes:

- a new dependency: a system package, an Astal library or an npm
  package;
- a change to what the shell accepts from outside: `ags request`
  commands, files it reads, keybindings it expects in the niri config;
- anything hard to undo, such as deleting data, branches or files that are
  not part of the current change.

A question from the owner is not approval.

## Never

- Put secrets, tokens or personal data in files, logs, commits or chat.
- Change the owner's niri config or other dotfiles outside this
  repository.
- Stop, restart or kill processes the shell did not start, such as
  another shell or bar that is running.
- Commit, push or open a pull request unless the owner says so. Never
  merge, approve or close a pull request, touch tags, publish or release.
- Add AI attribution anywhere: no `Co-Authored-By`, session links or
  "Generated with" lines in commits or pull requests.
- Disable, skip or weaken a check to make it pass.
- Change `user.name` or `user.email`, pass `--author`, run a bare
  `git stash` or `pkill`.

## Git

- Name a branch after its topic, in a few lowercase words joined by
  hyphens, such as `niri-service` or `launcher`: no prefix like `feat/`
  or `claude/`, no random words. Its worktree folder has the same name.
- Work in a worktree of your own, never in the main checkout:
  `git worktree add .claude/worktrees/<branch> -b <branch> origin/master`.
  Not `claude --worktree`, which names the branch itself. A branch that
  builds on another one starts from that branch instead.
- Run every command inside the worktree. The main checkout stays on
  `master`; do not switch, rebase or reset it.
- Remove a worktree only when its branch is merged or the owner drops it,
  and only when `git status` there prints nothing.
- Commit title: imperative, at most 72 characters, no prefix, no period.
  The body says why.
- Push only with `--force-with-lease --force-if-includes`.
- A pull request says `Closes #N` when it comes from an issue.

## Writing

- English, plain ASCII: no long dashes, curly quotes, arrows or emoji.
- Markdown is formatted by hand; tables are unpadded, with the separator
  `| --- | --- |`.

## This file

Add a rule here only after an agent made that mistake. Keep the file under
100 lines.
