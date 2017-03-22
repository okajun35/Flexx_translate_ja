from flexx import ui

class Example(ui.Widget):

    def init(self):
        with ui.HBox():
            with ui.SplitPanel(flex=1):
                url = 'http://www.w3schools.com/tags/mov_bbb.mp4'
                self.vid1 = ui.VideoWidget(source=url)
                self.vid2 = ui.YoutubeWidget(source='dhRUe-gz690')
