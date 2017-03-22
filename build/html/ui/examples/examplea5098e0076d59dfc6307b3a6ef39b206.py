from flexx import app, ui, event

class Example(ui.Widget):

    def init(self):
        with ui.VBox():
            self.line = ui.LineEdit(flex=0,
                                    placeholder_text='type here',
                                    autocomp=['foo', 'bar'])
            ui.Label(flex=0, text='copy:')
            self.label = ui.Label(flex=1)

    class JS:
        @event.connect('line.text')
        def _change_label(self, *events):
            self.label.text = events[-1].new_value
