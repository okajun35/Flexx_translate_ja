from flexx import app, ui

class Example(ui.Widget):

    def init(self):

        with ui.html.UL():
            ui.html.LI(text='foo')
            ui.html.LI(text='bar')
