
from flexx import app, ui

class App(ui.Widget):

    def init(self):
        with ui.GroupWidget(title='This is a panel'):
            with ui.VBox():
                ui.ProgressBar(value=0.2)
                ui.Button(text='click me')