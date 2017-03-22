from flexx import ui

class Example(ui.Widget):
    def init(self):
        with ui.DockPanel():
            ui.Widget(style='background:#a00;', title='red')
            ui.Widget(style='background:#0a0;', title='green')
            ui.Widget(style='background:#00a;', title='blue')
            ui.Widget(style='background:#aa0;', title='yellow')
            ui.Widget(style='background:#a0a;', title='purple')
            ui.Widget(style='background:#0aa;', title='cyan')
