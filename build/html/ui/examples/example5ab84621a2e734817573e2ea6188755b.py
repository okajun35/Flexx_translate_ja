from flexx import app, ui, event

class Example(ui.BoxPanel):

    def init(self):
        with ui.VBox():
            self.b1 = ui.Button(text='apple')
            self.b2 = ui.Button(text='banana')
            self.b3 = ui.Button(text='pear')
            self.buttonlabel= ui.Label(text='...')
        with ui.VBox():
            self.r1 = ui.RadioButton(text='apple')
            self.r2 = ui.RadioButton(text='banana')
            self.r3 = ui.RadioButton(text='pear')
            self.radiolabel = ui.Label(text='...')
        with ui.VBox():
            self.c1 = ui.CheckBox(text='apple')
            self.c2 = ui.CheckBox(text='banana')
            self.c3 = ui.CheckBox(text='pear')
            self.checklabel = ui.Label(text='...')

    class JS:

        @event.connect('b1.mouse_click', 'b2.mouse_click','b3.mouse_click',  )
        def _button_clicked(self, *events):
            ev = events[-1]
            self.buttonlabel.text = 'Clicked on the ' + ev.source.text

        @event.connect('r1.checked', 'r2.checked','r3.checked')
        def _radio_changed(self, *events):
            # There will also be events for radio buttons being unchecked, but
            # Flexx ensures that the last event is for the one being checked
            ev = events[-1]
            self.radiolabel.text = 'Selected the ' + ev.source.text

        @event.connect('c1.checked', 'c2.checked','c3.checked',  )
        def _check_changed(self, *events):
            selected = [c.text for c in (self.c1, self.c2, self.c3) if c.checked]
            if selected:
                self.checklabel.text = 'Selected: ' + ', '.join(selected)
            else:
                self.checklabel.text = 'None selected'
