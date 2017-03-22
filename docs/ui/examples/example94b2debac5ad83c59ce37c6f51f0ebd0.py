from flexx import app, ui

class Example(ui.Widget):

    def init(self):
        with ui.HBox():
            ui.Button(flex=1, text='hello')
            ui.Button(flex=1, text='world')
