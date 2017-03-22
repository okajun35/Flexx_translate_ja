
from flexx import app, ui

class App(ui.Widget):

    def init(self):
        p = ui.ProgressBar(value=0.7)