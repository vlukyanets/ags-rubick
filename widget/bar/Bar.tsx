import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"
import Clock from "./Clock"

type BarProps = {
  gdkmonitor: Gdk.Monitor
}

export default function Bar({ gdkmonitor }: BarProps) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

  return (
    <window
      visible
      name={`bar-${gdkmonitor.connector}`}
      class="Bar"
      namespace="rubick-bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      application={app}
    >
      <centerbox cssName="centerbox">
        <box $type="start" class="start" />
        <box $type="center" class="center">
          <Clock />
        </box>
        <box $type="end" class="end" />
      </centerbox>
    </window>
  )
}
