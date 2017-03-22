from flexx import app, ui, event

class Example(ui.Widget):
    def init(self):
        with ui.TabPanel() as self.t:
            self.a = ui.Widget(title='red', style='background:#a00;')
            self.b = ui.Widget(title='green', style='background:#0a0;')
            self.c = ui.Widget(title='blue', style='background:#00a;')
            self.d = ui.Widget(title='cyan', style='background:#0aa;')

    class JS:

        @event.connect('t.current')
        def cur_tab_changed(self, *events):
            prev = events[0].old_value
            if prev is not None:
                prev.title = prev.title.strip(' *')
            next = events[-1].new_value
            if next is not None:
                next.title = next.title + '*'
            # Don't like Cyan
            if next is self.d:
                self.t.current = self.a
