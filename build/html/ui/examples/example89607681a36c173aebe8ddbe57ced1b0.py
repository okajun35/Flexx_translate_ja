from flexx import app, ui, event

class Example(ui.GroupWidget):
    def init(self):
        self.title = 'A silly panel'
        with ui.VBox():
            ui.ProgressBar(value=0.2)
            self.but = ui.Button(text='click me')

    class JS:
        @event.connect('but.mouse_down')
        def _change_group_title(self, *events):
            self.title = self.title + '-'
