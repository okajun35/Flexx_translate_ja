
from flexx import app, ui

class App(ui.Widget):

    def init(self):
        p = ui.PlotWidget(xdata=range(5), ydata=[1,3,4,2,5],
                          line_width=4, line_color='red', marker_color='',
                          style='min-height:200px;')