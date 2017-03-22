from flexx import app, event, ui

class Example(ui.Widget):

    CSS = '''
    .flx-TreeWidget {
        background: #000;
        color: #afa;
    }
    '''

    def init(self):

        with ui.BoxPanel():

            self.label = ui.Label(flex=1, style='overflow-y: scroll;')

            with ui.TreeWidget(flex=1, max_selected=1) as self.tree:
                for t in ['foo', 'bar', 'spam', 'eggs']:
                    with ui.TreeItem(text=t, checked=None):
                        for i in range(4):
                            item2 = ui.TreeItem(text=t + ' %i'%i, checked=False)
                            if i == 2:
                                with item2:
                                    ui.TreeItem(title='A', text='more info on A')
                                    ui.TreeItem(title='B', text='more info on B')
    class JS:

        @event.connect('tree.items**.checked', 'tree.items**.selected',
                    'tree.items**.collapsed')
        def on_event(self, *events):
            for ev in events:
                id = ev.source.title or ev.source.text
                if ev.new_value:
                    text = id + ' was ' + ev.type
                else:
                    text = id + ' was ' + 'un-' + ev.type
                self.label.text = text + '<br />' +  self.label.text
