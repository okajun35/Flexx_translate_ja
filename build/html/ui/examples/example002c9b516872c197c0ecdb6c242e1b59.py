from flexx import ui

class Example(ui.Widget):
    def init(self):
        with ui.FormLayout():
            self.b1 = ui.LineEdit(title='Name:')
            self.b2 = ui.LineEdit(title="Age:")
            self.b3 = ui.LineEdit(title="Favorite color:")
            ui.Widget(flex=1)
