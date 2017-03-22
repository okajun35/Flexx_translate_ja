from flexx import ui

class Example(ui.Widget):
    def init(self):
        with ui.BoxLayout(orientation='v'):

            ui.Label(text='Flex 0 0 0')
            with ui.HBox(flex=0):
                self.b1 = ui.Button(text='Hola', flex=0)
                self.b2 = ui.Button(text='Hello world', flex=0)
                self.b3 = ui.Button(text='Foo bar', flex=0)

            ui.Label(text='Flex 1 0 3')
            with ui.HBox(flex=0):
                self.b1 = ui.Button(text='Hola', flex=1)
                self.b2 = ui.Button(text='Hello world', flex=0)
                self.b3 = ui.Button(text='Foo bar', flex=3)

            ui.Label(text='padding 10 (around layout)')
            with ui.HBox(flex=0, padding=10):
                self.b1 = ui.Button(text='Hola', flex=1)
                self.b2 = ui.Button(text='Hello world', flex=1)
                self.b3 = ui.Button(text='Foo bar', flex=1)

            ui.Label(text='spacing 10 (inter-widget)')
            with ui.HBox(flex=0, spacing=10):
                self.b1 = ui.Button(text='Hola', flex=1)
                self.b2 = ui.Button(text='Hello world', flex=1)
                self.b3 = ui.Button(text='Foo bar', flex=1)

            ui.Widget(flex=1)
            ui.Label(text='Note the spacer Widget above')
