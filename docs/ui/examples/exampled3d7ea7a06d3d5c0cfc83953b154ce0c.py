from flexx import ui

class Example(ui.Widget):
    def init(self):
        with ui.PinboardLayout():
            self.b1 = ui.Button(text='Stuck at (20, 20)', pos=(20, 30),
                                base_size=(100, 100))
            self.b2 = ui.Button(text='Dynamic at (30%, 30%)', pos=(0.3, 0.3))
            self.b3 = ui.Button(text='Dynamic at (50%, 70%)', pos=(0.5, 0.7))
