import app from "ags/gtk4/app"
import { Gtk } from "ags/gtk4"
import { createBinding, For, This } from "ags"
import style from "./style/main.scss"
import Bar from "./widget/bar/Bar"

app.start({
  instanceName: "rubick",
  css: style,
  main() {
    // app.monitors notifies on hotplug, so bars follow connected outputs
    const monitors = createBinding(app, "monitors")

    return (
      <For each={monitors} cleanup={(win) => (win as Gtk.Window).destroy()}>
        {(monitor) => (
          <This this={app}>
            <Bar gdkmonitor={monitor} />
          </This>
        )}
      </For>
    )
  },
})
