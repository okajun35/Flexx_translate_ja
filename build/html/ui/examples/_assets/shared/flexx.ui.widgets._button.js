/* ====================== flexx.ui.widgets._button ======================*/

/* Autogenerated code from Flexx. Code Subject to the BSD-2-clause license. */



flexx.define("flexx.ui.widgets._button", ["pyscript-std.js", "flexx.ui._widget"], function (_py, flexx_ui__widget) {

"use strict";

var _pyfunc_zip = _py._pyfunc_zip, _pyfunc_pow = _py._pyfunc_pow, _pyfunc_reversed = _py._pyfunc_reversed, _pyfunc_dict = _py._pyfunc_dict, _pyfunc_any = _py._pyfunc_any, _pyfunc_op_equals = _py._pyfunc_op_equals, _pyfunc_list = _py._pyfunc_list, _pyfunc_enumerate = _py._pyfunc_enumerate, _pyfunc_setattr = _py._pyfunc_setattr, _pyfunc_time = _py._pyfunc_time, _pyfunc_truthy = _py._pyfunc_truthy, _pyfunc_op_instantiate = _py._pyfunc_op_instantiate, _pyfunc_perf_counter = _py._pyfunc_perf_counter, _pyfunc_int = _py._pyfunc_int, _pyfunc_float = _py._pyfunc_float, _pyfunc_sum = _py._pyfunc_sum, _pyfunc_op_mult = _py._pyfunc_op_mult, _pyfunc_sorted = _py._pyfunc_sorted, _pyfunc_filter = _py._pyfunc_filter, _pyfunc_hasattr = _py._pyfunc_hasattr, _pyfunc_op_add = _py._pyfunc_op_add, _pyfunc_bool = _py._pyfunc_bool, _pyfunc_abs = _py._pyfunc_abs, _pyfunc_op_contains = _py._pyfunc_op_contains, _pyfunc_all = _py._pyfunc_all, _pyfunc_getattr = _py._pyfunc_getattr, _pyfunc_range = _py._pyfunc_range, _pyfunc_divmod = _py._pyfunc_divmod, _pyfunc_round = _py._pyfunc_round, _pyfunc_delattr = _py._pyfunc_delattr, _pyfunc_map = _py._pyfunc_map, _pyfunc_str = _py._pyfunc_str, _pyfunc_repr = _py._pyfunc_repr;
var _pymeth_remove = _py._pymeth_remove, _pymeth_index = _py._pymeth_index, _pymeth_capitalize = _py._pymeth_capitalize, _pymeth_isnumeric = _py._pymeth_isnumeric, _pymeth_isalpha = _py._pymeth_isalpha, _pymeth_partition = _py._pymeth_partition, _pymeth_rstrip = _py._pymeth_rstrip, _pymeth_repeat = _py._pymeth_repeat, _pymeth_setdefault = _py._pymeth_setdefault, _pymeth_islower = _py._pymeth_islower, _pymeth_casefold = _py._pymeth_casefold, _pymeth_isupper = _py._pymeth_isupper, _pymeth_swapcase = _py._pymeth_swapcase, _pymeth_extend = _py._pymeth_extend, _pymeth_lstrip = _py._pymeth_lstrip, _pymeth_clear = _py._pymeth_clear, _pymeth_isidentifier = _py._pymeth_isidentifier, _pymeth_zfill = _py._pymeth_zfill, _pymeth_popitem = _py._pymeth_popitem, _pymeth_split = _py._pymeth_split, _pymeth_reverse = _py._pymeth_reverse, _pymeth_isspace = _py._pymeth_isspace, _pymeth_rjust = _py._pymeth_rjust, _pymeth_values = _py._pymeth_values, _pymeth_sort = _py._pymeth_sort, _pymeth_copy = _py._pymeth_copy, _pymeth_endswith = _py._pymeth_endswith, _pymeth_replace = _py._pymeth_replace, _pymeth_rindex = _py._pymeth_rindex, _pymeth_rpartition = _py._pymeth_rpartition, _pymeth_title = _py._pymeth_title, _pymeth_join = _py._pymeth_join, _pymeth_splitlines = _py._pymeth_splitlines, _pymeth_rsplit = _py._pymeth_rsplit, _pymeth_startswith = _py._pymeth_startswith, _pymeth_expandtabs = _py._pymeth_expandtabs, _pymeth_keys = _py._pymeth_keys, _pymeth_append = _py._pymeth_append, _pymeth_lower = _py._pymeth_lower, _pymeth_isalnum = _py._pymeth_isalnum, _pymeth_items = _py._pymeth_items, _pymeth_count = _py._pymeth_count, _pymeth_get = _py._pymeth_get, _pymeth_translate = _py._pymeth_translate, _pymeth_center = _py._pymeth_center, _pymeth_find = _py._pymeth_find, _pymeth_update = _py._pymeth_update, _pymeth_ljust = _py._pymeth_ljust, _pymeth_istitle = _py._pymeth_istitle, _pymeth_upper = _py._pymeth_upper, _pymeth_insert = _py._pymeth_insert, _pymeth_pop = _py._pymeth_pop, _pymeth_strip = _py._pymeth_strip, _pymeth_rfind = _py._pymeth_rfind;





var BaseButton = flexx.classes.BaseButton = function () {
    _pyfunc_op_instantiate(this, arguments);
}
BaseButton.prototype = Object.create(flexx.classes.Widget.prototype);
BaseButton.prototype._base_class = flexx.classes.Widget.prototype;
BaseButton.prototype._class_name = "BaseButton";

BaseButton.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_click", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
BaseButton.prototype.__handlers__ = ["_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
BaseButton.prototype.__local_properties__ = ["parent", "size"];
BaseButton.prototype.__properties__ = ["base_size", "checked", "children", "container", "css_class", "disabled", "flex", "icon", "parent", "pos", "size", "style", "tabindex", "text", "title"];

BaseButton.prototype.checked = function (v) {
    v = (v === undefined) ? false: v;
    return _pyfunc_bool(v);
};
BaseButton.prototype.checked.nobind = true;
BaseButton.prototype.checked.default = false;
BaseButton.prototype.checked.emitter_type = "Property";

BaseButton.prototype.disabled = function (v) {
    v = (v === undefined) ? false: v;
    return _pyfunc_bool(v);
};
BaseButton.prototype.disabled.nobind = true;
BaseButton.prototype.disabled.default = false;
BaseButton.prototype.disabled.emitter_type = "Property";

BaseButton.prototype.mouse_click = function (e) {
    return this._create_mouse_event(e);
};
BaseButton.prototype.mouse_click.nobind = true;
BaseButton.prototype.mouse_click.emitter_type = "Emitter";

BaseButton.prototype.text = function (v) {
    v = (v === undefined) ? "": v;
    return _pyfunc_str(v);
};
BaseButton.prototype.text.nobind = true;
BaseButton.prototype.text.default = "";
BaseButton.prototype.text.emitter_type = "Property";



var Button = flexx.classes.Button = function () {
    _pyfunc_op_instantiate(this, arguments);
}
Button.prototype = Object.create(flexx.classes.BaseButton.prototype);
Button.prototype._base_class = flexx.classes.BaseButton.prototype;
Button.prototype._class_name = "Button";

Button.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_click", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
Button.prototype.__handlers__ = ["_Button__disabled_changed", "_Button__text_changed", "_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
Button.prototype.__local_properties__ = ["parent", "size"];
Button.prototype.__properties__ = ["base_size", "checked", "children", "container", "css_class", "disabled", "flex", "icon", "parent", "pos", "size", "style", "tabindex", "text", "title"];

Button.prototype._Button__disabled_changed = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    if (_pyfunc_truthy(events[events.length -1].new_value)) {
        this.node.setAttribute("disabled", "disabled");
    } else {
        this.node.removeAttribute("disabled");
    }
    return null;
};
Button.prototype._Button__disabled_changed.nobind = true;
Button.prototype._Button__disabled_changed._connection_strings = ["disabled"];

Button.prototype._Button__text_changed = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    this.node.innerHTML = events[events.length -1].new_value;
    return null;
};
Button.prototype._Button__text_changed.nobind = true;
Button.prototype._Button__text_changed._connection_strings = ["text"];

Button.prototype._init_phosphor_and_node = function () {
    this.phosphor = this._create_phosphor_widget("button");
    this.node = this.phosphor.node;
    this.node.addEventListener("click", this.mouse_click, 0);
    return null;
};



var ToggleButton = flexx.classes.ToggleButton = function () {
    _pyfunc_op_instantiate(this, arguments);
}
ToggleButton.prototype = Object.create(flexx.classes.BaseButton.prototype);
ToggleButton.prototype._base_class = flexx.classes.BaseButton.prototype;
ToggleButton.prototype._class_name = "ToggleButton";

ToggleButton.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_click", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
ToggleButton.prototype.__handlers__ = ["_ToggleButton__check_changed", "_ToggleButton__text_changed", "_ToggleButton__toggle_checked", "_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
ToggleButton.prototype.__local_properties__ = ["parent", "size"];
ToggleButton.prototype.__properties__ = ["base_size", "checked", "children", "container", "css_class", "disabled", "flex", "icon", "parent", "pos", "size", "style", "tabindex", "text", "title"];

ToggleButton.prototype._ToggleButton__check_changed = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    if (_pyfunc_truthy(this.checked)) {
        this.node.classList.add("flx-ToggleButton-checked");
    } else {
        _pymeth_remove.call(this.node.classList, "flx-ToggleButton-checked");
    }
    return null;
};
ToggleButton.prototype._ToggleButton__check_changed.nobind = true;
ToggleButton.prototype._ToggleButton__check_changed._connection_strings = ["checked"];

ToggleButton.prototype._ToggleButton__text_changed = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    this.node.innerHTML = events[events.length -1].new_value;
    return null;
};
ToggleButton.prototype._ToggleButton__text_changed.nobind = true;
ToggleButton.prototype._ToggleButton__text_changed._connection_strings = ["text"];

ToggleButton.prototype._ToggleButton__toggle_checked = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    this.checked = !_pyfunc_truthy(this.checked);
    return null;
};
ToggleButton.prototype._ToggleButton__toggle_checked.nobind = true;
ToggleButton.prototype._ToggleButton__toggle_checked._connection_strings = ["mouse_click"];

ToggleButton.prototype._init_phosphor_and_node = function () {
    this.phosphor = this._create_phosphor_widget("button");
    this.node = this.phosphor.node;
    this.node.addEventListener("click", this.mouse_click, 0);
    return null;
};



var RadioButton = flexx.classes.RadioButton = function () {
    _pyfunc_op_instantiate(this, arguments);
}
RadioButton.prototype = Object.create(flexx.classes.BaseButton.prototype);
RadioButton.prototype._base_class = flexx.classes.BaseButton.prototype;
RadioButton.prototype._class_name = "RadioButton";

RadioButton.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_click", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
RadioButton.prototype.__handlers__ = ["_RadioButton__check_changed", "_RadioButton__text_changed", "_RadioButton__update_group", "_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
RadioButton.prototype.__local_properties__ = ["parent", "size"];
RadioButton.prototype.__properties__ = ["base_size", "checked", "children", "container", "css_class", "disabled", "flex", "icon", "parent", "pos", "size", "style", "tabindex", "text", "title"];

RadioButton.prototype._RadioButton__check_changed = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    this.node.checked = this.checked;
    return null;
};
RadioButton.prototype._RadioButton__check_changed.nobind = true;
RadioButton.prototype._RadioButton__check_changed._connection_strings = ["checked"];

RadioButton.prototype._RadioButton__text_changed = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    this.text_node.innerHTML = events[events.length -1].new_value;
    return null;
};
RadioButton.prototype._RadioButton__text_changed.nobind = true;
RadioButton.prototype._RadioButton__text_changed._connection_strings = ["text"];

RadioButton.prototype._RadioButton__update_group = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    if (_pyfunc_truthy(this.parent)) {
        this.node.name = this.parent.id;
    }
    return null;
};
RadioButton.prototype._RadioButton__update_group.nobind = true;
RadioButton.prototype._RadioButton__update_group._connection_strings = ["parent"];

RadioButton.prototype._check_radio_click = function (ev) {
    var child, stub1_seq, stub2_itr;
    if (_pyfunc_truthy(this.parent)) {
        stub1_seq = this.parent.children;
        if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
            stub1_seq = Object.keys(stub1_seq);
        }
        for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
            child = stub1_seq[stub2_itr];
            if ((_pyfunc_truthy(child instanceof RadioButton) && (child !== this))) {
                child.checked = child.node.checked;
            }
        }
    }
    this.checked = this.node.checked;
    this.mouse_click(ev);
    return null;
};

RadioButton.prototype._init_phosphor_and_node = function () {
    var p, template;
    this.phosphor = p = this._create_phosphor_widget("div");
    template = "<input type=\"radio\" id=\"ID\"><label for=\"ID\">";
    p.node.innerHTML = _pymeth_replace.call(template, "ID", this.id);
    this.node = p.node.childNodes[0];
    this.text_node = p.node.childNodes[1];
    this.node.addEventListener("click", this._check_radio_click, 0);
    return null;
};



var CheckBox = flexx.classes.CheckBox = function () {
    _pyfunc_op_instantiate(this, arguments);
}
CheckBox.prototype = Object.create(flexx.classes.BaseButton.prototype);
CheckBox.prototype._base_class = flexx.classes.BaseButton.prototype;
CheckBox.prototype._class_name = "CheckBox";

CheckBox.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_click", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
CheckBox.prototype.__handlers__ = ["_CheckBox__check_changed", "_CheckBox__text_changed", "_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
CheckBox.prototype.__local_properties__ = ["parent", "size"];
CheckBox.prototype.__properties__ = ["base_size", "checked", "children", "container", "css_class", "disabled", "flex", "icon", "parent", "pos", "size", "style", "tabindex", "text", "title"];

CheckBox.prototype._CheckBox__check_changed = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    this.node.checked = this.checked;
    return null;
};
CheckBox.prototype._CheckBox__check_changed.nobind = true;
CheckBox.prototype._CheckBox__check_changed._connection_strings = ["checked"];

CheckBox.prototype._CheckBox__text_changed = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    this.text_node.innerHTML = events[events.length -1].new_value;
    return null;
};
CheckBox.prototype._CheckBox__text_changed.nobind = true;
CheckBox.prototype._CheckBox__text_changed._connection_strings = ["text"];

CheckBox.prototype._check_changed_from_dom = function (ev) {
    this.checked = this.node.checked;
    return null;
};

CheckBox.prototype._init_phosphor_and_node = function () {
    var p, template;
    this.phosphor = p = this._create_phosphor_widget("div");
    template = "<input type=\"checkbox\" id=\"ID\"><label for=\"ID\">";
    p.node.innerHTML = _pymeth_replace.call(template, "ID", this.id);
    this.node = p.node.childNodes[0];
    this.text_node = p.node.childNodes[1];
    this.node.addEventListener("click", this.mouse_click, 0);
    this.node.addEventListener("change", this._check_changed_from_dom, 0);
    return null;
};



return {BaseButton: BaseButton, Button: Button, CheckBox: CheckBox, RadioButton: RadioButton, ToggleButton: ToggleButton};
});