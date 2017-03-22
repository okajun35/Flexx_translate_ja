import numpy as np
from bokeh.plotting import figure
from flexx import app, ui, event

x = np.linspace(0, 6, 50)

p1 = figure()
p1.line(x, np.sin(x))

p2 = figure()
p2.line(x, np.cos(x))

class Example(ui.Widget):

    def init(self):
        with ui.BoxPanel():
            ui.BokehWidget(plot=p1)
            ui.BokehWidget(plot=p2)
