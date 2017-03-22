from flexx import app, ui, event

class Example(ui.Widget):
    def init(self):
        self.layout = ui.PlotLayout()
        self.slider1 = ui.Slider(min=1, max=2, value=1)
        self.slider2 = ui.Slider(min=3, max=10, value=3)
        self.progress = ui.ProgressBar(max=100, value=0)
        self.layout.add_tools('Edit plot',
                            ui.Label(text='exponent'), self.slider1,
                            ui.Label(text='numel'), self.slider2,
                            )
        self.layout.add_tools('Plot info', ui.Label(text='Maximum'), self.progress)

    class JS:

        @event.connect('slider1.value', 'slider2.value')
        def __update_plot(self, *events):
            e, n = self.slider1.value, self.slider2.value
            xx = range(n+1)
            self.layout._plot.xdata = xx
            self.layout._plot.ydata = [x**e for x in xx]

        @event.connect('layout._plot.ydata')
        def __update_max(self, *events):
            yy = events[-1].new_value
            if yy:
                self.progress.value = max(yy)
