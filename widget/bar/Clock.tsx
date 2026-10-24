import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"
import GLib from "gi://GLib"

type ClockProps = {
  format?: string
}

export default function Clock({ format = "%H:%M" }: ClockProps) {
  const time = createPoll("", 1000, () => GLib.DateTime.new_now_local().format(format)!)

  return (
    <menubutton class="Clock">
      <label label={time} />
      <popover>
        <Gtk.Calendar />
      </popover>
    </menubutton>
  )
}
