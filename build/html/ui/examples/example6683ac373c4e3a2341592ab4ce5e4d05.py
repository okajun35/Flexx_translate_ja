from flexx import ui, event

class Example(ui.Widget):

    def init(self):
        self.c = ui.ColorSelectWidget()

    class JS:

        @event.connect('c.color')
        def _color_changed(self, *events):
            self.node.style.background = events[-1].new_value
