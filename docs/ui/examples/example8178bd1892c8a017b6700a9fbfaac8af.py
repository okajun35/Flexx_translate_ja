from flexx import app, ui, event

class Example(ui.Widget):

    def init(self):
        with ui.HBox():
            self.b1 = ui.Button(flex=0, text='Less')
            self.b2 = ui.Button(flex=0, text='More')
            self.prog = ui.ProgressBar(flex=1, value=0.1)

    class JS:

        @event.connect('b1.mouse_down', 'b2.mouse_down')
        def _change_progress(self, *events):
            for ev in events:
                if ev.source is self.b1:
                    self.prog.value -= 0.1
                else:
                    self.prog.value += 0.1
