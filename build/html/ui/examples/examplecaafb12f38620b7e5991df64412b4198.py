from flexx import ui

class Example(ui.Widget):
    def init(self):
        with ui.SplitPanel(orientation='h'):
            ui.Label(text='red', style='background:#f77;')
            with ui.SplitPanel(orientation='v'):
                ui.Label(text='green', style='background:#7f7;')
                ui.Label(text='blue', style='background:#77f')
                ui.Label(text='purple', style='background:#f7f;')
