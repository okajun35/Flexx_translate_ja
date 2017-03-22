
from flexx import app, ui

class App(ui.Widget):

    def init(self):
        s = ui.Slider(min=10, max=20, value=12)