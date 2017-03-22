from flexx import app, ui, event
from flexx.pyscript import window

class Example(ui.Widget):
    def init(self):
        time = [i/100 for i in range(100)]
        with ui.VBox():
            with ui.HBox():
                ui.Label(text='Frequency:')
                self.slider1 = ui.Slider(min=1, max=10, value=5, flex=1)
                ui.Label(text='Phase:')
                self.slider2 = ui.Slider(min=0, max=6, value=0, flex=1)
            self.plot = ui.PlotWidget(flex=1, xdata=time, xlabel='time',
                                      ylabel='amplitude', title='a sinusoid')

    class JS:

        @event.connect('slider1.value', 'slider2.value')
        def __update_amplitude(self, *events):
            freq, phase = self.slider1.value, self.slider2.value
            ydata = []
            for x in self.plot.xdata:
                ydata.append(window.Math.sin(freq*x*2*window.Math.PI+phase))
            self.plot.ydata = ydata
