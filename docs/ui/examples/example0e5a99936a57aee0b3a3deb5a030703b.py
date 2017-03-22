from flexx import app, ui, event

class Example(ui.Widget):

    def init(self):
        with ui.HBox():
            self.but = ui.Button(text='Push me')
            self.label = ui.Label(flex=1, wrap=True, text='This is a label. ')

    class JS:
        @event.connect('but.mouse_down')
        def _add_label_text(self, *events):
            self.label.text = self.label.text + 'Yes it is. '
