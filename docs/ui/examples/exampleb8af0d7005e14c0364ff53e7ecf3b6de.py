from flexx import ui, event

class Example(ui.Widget):

    def init(self):
        with ui.HBox():
            self.stretch = ui.CheckBox(text='Stretch')
            with ui.SplitPanel(flex=1):
                self.im1 = ui.ImageWidget(source='http://github.com/fluidicon.png')
                self.im2 = ui.ImageWidget(source='http://github.com/fluidicon.png')

    class JS:

        @event.connect('stretch.checked')
        def make_stretched(self, *events):
            self.im1.stretch = self.im2.stretch = self.stretch.checked
