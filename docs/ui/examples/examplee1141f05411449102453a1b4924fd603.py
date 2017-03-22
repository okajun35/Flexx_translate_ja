
from flexx import app, ui

class App(ui.Widget):

    def init(self):
        with ui.BoxPanel():
            ui.IFrame(url='flexx.readthedocs.io')
            ui.IFrame(url='flexx.readthedocs.io')