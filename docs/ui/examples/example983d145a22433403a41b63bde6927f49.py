from flexx import app, event, ui

class Example(ui.Widget):

    CSS = '''
        .flx-DropdownContainer > .flx-TreeWidget {
            min-height: 150px;
        }
    '''

    def init(self):

        # A nice and cosy tree view
        with ui.DropdownContainer(text='Scene graph'):
            with ui.TreeWidget(max_selected=1):
                for i in range(20):
                    ui.TreeItem(text='foo %i' % i, checked=False)

        # A combobox
        self.combo = ui.ComboBox(editable=True,
                                 options=('foo', 'bar', 'spaaaaaaaaam', 'eggs'))
        self.label = ui.Label()

    class JS:

        @event.connect('combo.text')
        def on_combobox_text(self, *events):
            self.label.text = 'Combobox text: ' + self.combo.text
            if self.combo.selected_index is not None:
                self.label.text += ' (index %i)' % self.combo.selected_index
