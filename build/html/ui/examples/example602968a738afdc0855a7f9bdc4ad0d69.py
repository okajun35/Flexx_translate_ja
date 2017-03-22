from flexx import app, ui

class Example(ui.Widget):

    def init(self):

        ui.ComboBox(text='chooce:', options=['foo', 'bar', 'spaaaam'])
