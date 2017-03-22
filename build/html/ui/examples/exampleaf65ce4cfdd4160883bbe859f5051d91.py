from flexx import app, ui, event

class Example(ui.Widget):

    def init(self):
        with ui.HBox():
            self.slider = ui.Slider(flex=0, min=1, max=20, step=1)
            self.label = ui.Label(flex=1)

    class JS:
        @event.connect('slider.value')
        def _change_label(self, *events):
            self.label.text = 'x' * events[-1].new_value
