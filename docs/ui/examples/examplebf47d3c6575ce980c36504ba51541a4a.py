from flexx import ui

class Example(ui.Widget):
    def init(self):
        with ui.VBoxPanel():

            ui.Label(text='Flex 0 0 0', style='')
            with ui.HBoxPanel(flex=0):
                self.b1 = ui.Button(text='Hola', flex=0)
                self.b2 = ui.Button(text='Hello world', flex=0)
                self.b3 = ui.Button(text='Foo bar', flex=0)

            ui.Label(text='Flex 1 0 3')
            with ui.HBoxPanel(flex=0):
                self.b1 = ui.Button(text='Hola', flex=1)
                self.b2 = ui.Button(text='Hello world', flex=0)
                self.b3 = ui.Button(text='Foo bar', flex=3)

            ui.Label(text='spacing 10 (inter-widget)')
            with ui.HBoxPanel(flex=0, spacing=20):
                self.b1 = ui.Button(text='Hola', flex=1)
                self.b2 = ui.Button(text='Hello world', flex=1)
                self.b3 = ui.Button(text='Foo bar', flex=1)

            ui.Widget(flex=1)
