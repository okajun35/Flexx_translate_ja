from flexx import ui, event

class Example(ui.HBox):
    def init(self):
        self.b1 = ui.Button(text='Horizontal', flex=0)
        self.b2 = ui.Button(text='Vertical', flex=1)
        self.b3 = ui.Button(text='Horizontal reversed', flex=2)
        self.b4 = ui.Button(text='Vertical reversed', flex=3)

    class JS:

        @event.connect('b1.mouse_down')
        def _to_horizontal(self, *events):
            self.orientation = 'h'

        @event.connect('b2.mouse_down')
        def _to_vertical(self, *events):
            self.orientation = 'v'

        @event.connect('b3.mouse_down')
        def _to_horizontal_rev(self, *events):
            self.orientation = 'hr'

        @event.connect('b4.mouse_down')
        def _to_vertical_r(self, *events):
            self.orientation = 'vr'
