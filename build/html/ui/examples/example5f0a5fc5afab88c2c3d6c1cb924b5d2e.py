from flexx import app, ui, event

class Example(ui.Widget):

    def init(self):

        with ui.html.UL():
            ui.html.LI(text='foo')
            ui.html.LI(text='bar')
            with ui.html.LI():
                with ui.html.I():
                    self.now = ui.html.Span(text='0')
        self.but = ui.html.Button(text='press me')

    class JS:

        @event.connect('but.mouse_down')
        def on_click(self, *events):
            self.now.text = window.Date.now()
