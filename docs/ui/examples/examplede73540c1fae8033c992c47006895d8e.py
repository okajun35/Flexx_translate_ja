from flexx import ui


class Content(ui.Widget):
    def init(self):
            # Here we use BoxLayout, because we care about natural size

            with ui.HBox():
                ui.Widget(flex=1)  # spacer
                ui.Button(text='hello')
                ui.Widget(flex=1)  # spacer


class SideWidget(ui.Label):
    CSS = '.flx-SideWidget {background: #aaf; border: 2px solid black;}'


class Example(ui.Widget):

    def init(self):
        # Here we use BoxPanel, because we define high-level layout

        with ui.VBoxPanel():
            SideWidget(text='Header', flex=0, base_size=100)
            with ui.HBoxPanel(flex=1):
                SideWidget(text='Left', flex=0, base_size=100)
                Content(flex=1)
                SideWidget(text='Right', flex=0, base_size=100)
            SideWidget(text='Bottom', flex=0, base_size=100)
