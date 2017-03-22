from flexx import app, ui

class Example(ui.Widget):

    def init(self):

        with ui.TreeWidget(max_selected=2):

            for t in ['foo', 'bar', 'spam', 'eggs']:
                ui.TreeItem(text=t, checked=False)
