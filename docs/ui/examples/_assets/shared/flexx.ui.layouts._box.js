/* ======================= flexx.ui.layouts._box ========================*/

/* Autogenerated code from Flexx. Code Subject to the BSD-2-clause license. */



flexx.define("flexx.ui.layouts._box", ["pyscript-std.js", "flexx.ui.layouts._layout"], function (_py, flexx_ui_layouts__layout) {

"use strict";

var _pyfunc_zip = _py._pyfunc_zip, _pyfunc_pow = _py._pyfunc_pow, _pyfunc_reversed = _py._pyfunc_reversed, _pyfunc_dict = _py._pyfunc_dict, _pyfunc_any = _py._pyfunc_any, _pyfunc_op_equals = _py._pyfunc_op_equals, _pyfunc_list = _py._pyfunc_list, _pyfunc_enumerate = _py._pyfunc_enumerate, _pyfunc_setattr = _py._pyfunc_setattr, _pyfunc_time = _py._pyfunc_time, _pyfunc_truthy = _py._pyfunc_truthy, _pyfunc_op_instantiate = _py._pyfunc_op_instantiate, _pyfunc_perf_counter = _py._pyfunc_perf_counter, _pyfunc_int = _py._pyfunc_int, _pyfunc_float = _py._pyfunc_float, _pyfunc_sum = _py._pyfunc_sum, _pyfunc_op_mult = _py._pyfunc_op_mult, _pyfunc_sorted = _py._pyfunc_sorted, _pyfunc_filter = _py._pyfunc_filter, _pyfunc_hasattr = _py._pyfunc_hasattr, _pyfunc_op_add = _py._pyfunc_op_add, _pyfunc_bool = _py._pyfunc_bool, _pyfunc_abs = _py._pyfunc_abs, _pyfunc_op_contains = _py._pyfunc_op_contains, _pyfunc_all = _py._pyfunc_all, _pyfunc_getattr = _py._pyfunc_getattr, _pyfunc_range = _py._pyfunc_range, _pyfunc_divmod = _py._pyfunc_divmod, _pyfunc_round = _py._pyfunc_round, _pyfunc_delattr = _py._pyfunc_delattr, _pyfunc_map = _py._pyfunc_map, _pyfunc_str = _py._pyfunc_str, _pyfunc_repr = _py._pyfunc_repr;
var _pymeth_remove = _py._pymeth_remove, _pymeth_index = _py._pymeth_index, _pymeth_capitalize = _py._pymeth_capitalize, _pymeth_isnumeric = _py._pymeth_isnumeric, _pymeth_isalpha = _py._pymeth_isalpha, _pymeth_partition = _py._pymeth_partition, _pymeth_rstrip = _py._pymeth_rstrip, _pymeth_repeat = _py._pymeth_repeat, _pymeth_setdefault = _py._pymeth_setdefault, _pymeth_islower = _py._pymeth_islower, _pymeth_casefold = _py._pymeth_casefold, _pymeth_isupper = _py._pymeth_isupper, _pymeth_swapcase = _py._pymeth_swapcase, _pymeth_extend = _py._pymeth_extend, _pymeth_lstrip = _py._pymeth_lstrip, _pymeth_clear = _py._pymeth_clear, _pymeth_isidentifier = _py._pymeth_isidentifier, _pymeth_zfill = _py._pymeth_zfill, _pymeth_popitem = _py._pymeth_popitem, _pymeth_split = _py._pymeth_split, _pymeth_reverse = _py._pymeth_reverse, _pymeth_isspace = _py._pymeth_isspace, _pymeth_rjust = _py._pymeth_rjust, _pymeth_values = _py._pymeth_values, _pymeth_sort = _py._pymeth_sort, _pymeth_copy = _py._pymeth_copy, _pymeth_endswith = _py._pymeth_endswith, _pymeth_replace = _py._pymeth_replace, _pymeth_rindex = _py._pymeth_rindex, _pymeth_rpartition = _py._pymeth_rpartition, _pymeth_title = _py._pymeth_title, _pymeth_join = _py._pymeth_join, _pymeth_splitlines = _py._pymeth_splitlines, _pymeth_rsplit = _py._pymeth_rsplit, _pymeth_startswith = _py._pymeth_startswith, _pymeth_expandtabs = _py._pymeth_expandtabs, _pymeth_keys = _py._pymeth_keys, _pymeth_append = _py._pymeth_append, _pymeth_lower = _py._pymeth_lower, _pymeth_isalnum = _py._pymeth_isalnum, _pymeth_items = _py._pymeth_items, _pymeth_count = _py._pymeth_count, _pymeth_get = _py._pymeth_get, _pymeth_translate = _py._pymeth_translate, _pymeth_center = _py._pymeth_center, _pymeth_find = _py._pymeth_find, _pymeth_update = _py._pymeth_update, _pymeth_ljust = _py._pymeth_ljust, _pymeth_istitle = _py._pymeth_istitle, _pymeth_upper = _py._pymeth_upper, _pymeth_insert = _py._pymeth_insert, _pymeth_pop = _py._pymeth_pop, _pymeth_strip = _py._pymeth_strip, _pymeth_rfind = _py._pymeth_rfind;

var _phosphor_boxpanel = flexx.require('phosphor/lib/ui/boxpanel');



var BaseBoxLayout = flexx.classes.BaseBoxLayout = function () {
    _pyfunc_op_instantiate(this, arguments);
}
BaseBoxLayout.prototype = Object.create(flexx.classes.Layout.prototype);
BaseBoxLayout.prototype._base_class = flexx.classes.Layout.prototype;
BaseBoxLayout.prototype._class_name = "BaseBoxLayout";

BaseBoxLayout.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
BaseBoxLayout.prototype.__handlers__ = ["_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
BaseBoxLayout.prototype.__local_properties__ = ["parent", "size"];
BaseBoxLayout.prototype.__properties__ = ["base_size", "children", "container", "css_class", "flex", "icon", "orientation", "parent", "pos", "size", "spacing", "style", "tabindex", "title"];

BaseBoxLayout.prototype.orientation = function (v) {
    var err_2;
    v = (v === undefined) ? null: v;
    if ((v === null)) {
        v = this._DEFAULT_ORIENTATION;
    }
    if ((({}).toString.call(v).match(/\s([a-zA-Z]+)/)[1].toLowerCase() === 'string')) {
        v = _pymeth_lower.call(v);
    }
    v = _pymeth_get.call({"horizontal": "h", 0: "h", "left-to-right": "h", "vertical": "v", 1: "v", "top-to-bottom": "v", "right-to-left": "hr", "bottom-to-top": "vr"}, v, v);
    if ((!_pyfunc_op_contains(v, ["h", "v", "hr", "vr"]))) {
        err_2 = new Error('ValueError:' + ("" + this.id + ".orientation got unknown value " + _pyfunc_repr(v) + "")); err_2.name = "ValueError"; throw err_2;
    }
    return v;
};
BaseBoxLayout.prototype.orientation.nobind = true;
BaseBoxLayout.prototype.orientation.default = null;
BaseBoxLayout.prototype.orientation.emitter_type = "Property";

BaseBoxLayout.prototype.spacing = function (v) {
    v = (v === undefined) ? 5: v;
    return _pyfunc_float(v);
};
BaseBoxLayout.prototype.spacing.nobind = true;
BaseBoxLayout.prototype.spacing.default = 5;
BaseBoxLayout.prototype.spacing.emitter_type = "Property";



var BoxLayout = flexx.classes.BoxLayout = function () {
    _pyfunc_op_instantiate(this, arguments);
}
BoxLayout.prototype = Object.create(flexx.classes.BaseBoxLayout.prototype);
BoxLayout.prototype._base_class = flexx.classes.BaseBoxLayout.prototype;
BoxLayout.prototype._class_name = "BoxLayout";

BoxLayout.prototype._DEFAULT_ORIENTATION = "h";
BoxLayout.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
BoxLayout.prototype.__handlers__ = ["_BoxLayout__orientation_changed", "_BoxLayout__padding_changed", "_BoxLayout__set_flexes", "_BoxLayout__spacing_changed", "_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
BoxLayout.prototype.__local_properties__ = ["parent", "size"];
BoxLayout.prototype.__properties__ = ["base_size", "children", "container", "css_class", "flex", "icon", "orientation", "padding", "parent", "pos", "size", "spacing", "style", "tabindex", "title"];

BoxLayout.prototype._BoxLayout__orientation_changed = function () {
    var err_2, events, name, ori, stub1_seq, stub2_itr, stub3_seq, stub4_itr, widget;
    events = Array.prototype.slice.call(arguments);
    ori = this.orientation;
    stub1_seq = ["hbox", "vbox", "hboxr", "vboxr"];
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        name = stub1_seq[stub2_itr];
        _pymeth_remove.call(this.outernode.classList, ("flx-" + name));
    }
    if ((_pyfunc_op_equals(ori, 0) || _pyfunc_op_equals(ori, "h"))) {
        this.outernode.classList.add("flx-hbox");
    } else if ((_pyfunc_op_equals(ori, 1) || _pyfunc_op_equals(ori, "v"))) {
        this.outernode.classList.add("flx-vbox");
    } else if (_pyfunc_op_equals(ori, "hr")) {
        this.outernode.classList.add("flx-hboxr");
    } else if (_pyfunc_op_equals(ori, "vr")) {
        this.outernode.classList.add("flx-vboxr");
    } else {
        err_2 = new Error('ValueError:' + ("Invalid box orientation: " + ori)); err_2.name = "ValueError"; throw err_2;
    }
    stub3_seq = this.children;
    if ((typeof stub3_seq === "object") && (!Array.isArray(stub3_seq))) {
        stub3_seq = Object.keys(stub3_seq);
    }
    for (stub4_itr = 0; stub4_itr < stub3_seq.length; stub4_itr += 1) {
        widget = stub3_seq[stub4_itr];
        widget._check_real_size();
    }
    return null;
};
BoxLayout.prototype._BoxLayout__orientation_changed.nobind = true;
BoxLayout.prototype._BoxLayout__orientation_changed._connection_strings = ["orientation"];

BoxLayout.prototype._BoxLayout__padding_changed = function () {
    var events, stub1_seq, stub2_itr, widget;
    events = Array.prototype.slice.call(arguments);
    this.outernode.style["padding"] = this.padding + "px";
    stub1_seq = this.children;
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        widget = stub1_seq[stub2_itr];
        widget._check_real_size();
    }
    return null;
};
BoxLayout.prototype._BoxLayout__padding_changed.nobind = true;
BoxLayout.prototype._BoxLayout__padding_changed._connection_strings = ["padding"];

BoxLayout.prototype._BoxLayout__set_flexes = function () {
    var events, i, ori, stub1_seq, stub2_itr, stub3_seq, stub4_itr, widget;
    events = Array.prototype.slice.call(arguments);
    ori = this.orientation;
    i = (_pyfunc_op_contains(ori, [0, "h", "hr"]))? (0) : (1);
    stub1_seq = this.children;
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        widget = stub1_seq[stub2_itr];
        this._applyBoxStyle(widget.outernode, "flex-grow", widget.flex[i]);
        this._applyBoxStyle(widget.outernode, "flex-shrink", _pyfunc_truthy(widget.flex[i]) || 1);
    }
    stub3_seq = this.children;
    if ((typeof stub3_seq === "object") && (!Array.isArray(stub3_seq))) {
        stub3_seq = Object.keys(stub3_seq);
    }
    for (stub4_itr = 0; stub4_itr < stub3_seq.length; stub4_itr += 1) {
        widget = stub3_seq[stub4_itr];
        widget._check_real_size();
    }
    return null;
};
BoxLayout.prototype._BoxLayout__set_flexes.nobind = true;
BoxLayout.prototype._BoxLayout__set_flexes._connection_strings = ["orientation", "children", "children*.flex"];

BoxLayout.prototype._BoxLayout__spacing_changed = function () {
    var child, children, children_events, events, margin, old_children, ori, stub10_itr, stub1_seq, stub2_itr, stub3_seq, stub4_itr, stub5_seq, stub6_itr, stub7_seq, stub8_itr, stub9_seq, widget;
    events = Array.prototype.slice.call(arguments);
    ori = this.orientation;
    children_events = (function list_comprehension () {var res = [];var ev, iter0, i0;iter0 = events;if ((typeof iter0 === "object") && (!Array.isArray(iter0))) {iter0 = Object.keys(iter0);}for (i0=0; i0<iter0.length; i0++) {ev = iter0[i0];if (!(_pyfunc_op_equals(ev.type, "children"))) {continue;}{res.push(ev);}}return res;}).apply(this);
    old_children = (_pyfunc_truthy(children_events))? (children_events[0].old_value) : ([]);
    children = this.children;
    stub1_seq = children;
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        child = stub1_seq[stub2_itr];
        child.outernode.style["margin-top"] = "";
        child.outernode.style["margin-left"] = "";
    }
    stub3_seq = old_children;
    if ((typeof stub3_seq === "object") && (!Array.isArray(stub3_seq))) {
        stub3_seq = Object.keys(stub3_seq);
    }
    for (stub4_itr = 0; stub4_itr < stub3_seq.length; stub4_itr += 1) {
        child = stub3_seq[stub4_itr];
        child.outernode.style["margin-top"] = "";
        child.outernode.style["margin-left"] = "";
    }
    margin = (_pyfunc_op_contains(ori, [1, "v", "vr"]))? ("margin-top") : ("margin-left");
    if (children.length) {
        if (_pyfunc_op_contains(ori, ["vr", "hr"])) {
            (children[children.length -1].outernode).style[margin] = "0px";
            stub5_seq = children.slice(0,-1);
            if ((typeof stub5_seq === "object") && (!Array.isArray(stub5_seq))) {
                stub5_seq = Object.keys(stub5_seq);
            }
            for (stub6_itr = 0; stub6_itr < stub5_seq.length; stub6_itr += 1) {
                child = stub5_seq[stub6_itr];
                child.outernode.style[margin] = this.spacing + "px";
            }
        } else {
            (children[0].outernode).style[margin] = "0px";
            stub7_seq = children.slice(1);
            if ((typeof stub7_seq === "object") && (!Array.isArray(stub7_seq))) {
                stub7_seq = Object.keys(stub7_seq);
            }
            for (stub8_itr = 0; stub8_itr < stub7_seq.length; stub8_itr += 1) {
                child = stub7_seq[stub8_itr];
                child.outernode.style[margin] = this.spacing + "px";
            }
        }
    }
    stub9_seq = children;
    if ((typeof stub9_seq === "object") && (!Array.isArray(stub9_seq))) {
        stub9_seq = Object.keys(stub9_seq);
    }
    for (stub10_itr = 0; stub10_itr < stub9_seq.length; stub10_itr += 1) {
        widget = stub9_seq[stub10_itr];
        widget._check_real_size();
    }
    return null;
};
BoxLayout.prototype._BoxLayout__spacing_changed.nobind = true;
BoxLayout.prototype._BoxLayout__spacing_changed._connection_strings = ["spacing", "orientation", "children"];

BoxLayout.prototype._applyBoxStyle = function (e, sty, value) {
    var prefix, stub1_seq, stub2_itr;
    stub1_seq = ["-webkit-", "-ms-", "-moz-", ""];
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        prefix = stub1_seq[stub2_itr];
        e.style[_pyfunc_op_add(prefix, sty)] = value;
    }
    return null;
};

BoxLayout.prototype.let_children_check_size = function () {
    var stub1_seq, stub2_itr, widget;
    stub1_seq = this.children;
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        widget = stub1_seq[stub2_itr];
        widget._check_real_size();
    }
    return null;
};

BoxLayout.prototype.padding = function (v) {
    v = (v === undefined) ? 1: v;
    return _pyfunc_float(v);
};
BoxLayout.prototype.padding.nobind = true;
BoxLayout.prototype.padding.default = 1;
BoxLayout.prototype.padding.emitter_type = "Property";



var BoxPanel = flexx.classes.BoxPanel = function () {
    _pyfunc_op_instantiate(this, arguments);
}
BoxPanel.prototype = Object.create(flexx.classes.BaseBoxLayout.prototype);
BoxPanel.prototype._base_class = flexx.classes.BaseBoxLayout.prototype;
BoxPanel.prototype._class_name = "BoxPanel";

BoxPanel.prototype._DEFAULT_ORIENTATION = "h";
BoxPanel.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
BoxPanel.prototype.__handlers__ = ["_BoxPanel__orientation_changed", "_BoxPanel__set_flexes", "_BoxPanel__spacing_changed", "_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
BoxPanel.prototype.__local_properties__ = ["parent", "size"];
BoxPanel.prototype.__properties__ = ["base_size", "children", "container", "css_class", "flex", "icon", "orientation", "parent", "pos", "size", "spacing", "style", "tabindex", "title"];

BoxPanel.prototype._BoxPanel__orientation_changed = function () {
    var err_2, events, ori;
    events = Array.prototype.slice.call(arguments);
    ori = this.orientation;
    if ((_pyfunc_op_equals(ori, 0) || _pyfunc_op_equals(ori, "h"))) {
        this.phosphor.direction = "left-to-right";
    } else if ((_pyfunc_op_equals(ori, 1) || _pyfunc_op_equals(ori, "v"))) {
        this.phosphor.direction = "top-to-bottom";
    } else if (_pyfunc_op_equals(ori, "hr")) {
        this.phosphor.direction = "right-to-left";
    } else if (_pyfunc_op_equals(ori, "vr")) {
        this.phosphor.direction = "bottom-to-top";
    } else {
        err_2 = new Error('ValueError:' + ("Invalid boxpanel orientation: " + ori)); err_2.name = "ValueError"; throw err_2;
    }
    return null;
};
BoxPanel.prototype._BoxPanel__orientation_changed.nobind = true;
BoxPanel.prototype._BoxPanel__orientation_changed._connection_strings = ["orientation"];

BoxPanel.prototype._BoxPanel__set_flexes = function () {
    var events, i, stub1_seq, stub2_itr, widget;
    events = Array.prototype.slice.call(arguments);
    i = (_pyfunc_op_contains(this.orientation, [0, "h", "hr"]))? (0) : (1);
    stub1_seq = this.children;
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        widget = stub1_seq[stub2_itr];
        _phosphor_boxpanel.BoxPanel.setStretch(widget.phosphor, widget.flex[i]);
        _phosphor_boxpanel.BoxPanel.setSizeBasis(widget.phosphor, widget.base_size[i]);
    }
    return null;
};
BoxPanel.prototype._BoxPanel__set_flexes.nobind = true;
BoxPanel.prototype._BoxPanel__set_flexes._connection_strings = ["orientation", "children", "children*.flex", "children*.base_size"];

BoxPanel.prototype._BoxPanel__spacing_changed = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    this.phosphor.spacing = events[events.length -1].new_value;
    return null;
};
BoxPanel.prototype._BoxPanel__spacing_changed.nobind = true;
BoxPanel.prototype._BoxPanel__spacing_changed._connection_strings = ["spacing"];

BoxPanel.prototype._init_phosphor_and_node = function () {
    this.phosphor = new _phosphor_boxpanel.BoxPanel();
    this.node = this.phosphor.node;
    return null;
};



var VBox = flexx.classes.VBox = function () {
    _pyfunc_op_instantiate(this, arguments);
}
VBox.prototype = Object.create(flexx.classes.BoxLayout.prototype);
VBox.prototype._base_class = flexx.classes.BoxLayout.prototype;
VBox.prototype._class_name = "VBox";

VBox.prototype._DEFAULT_ORIENTATION = "v";
VBox.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
VBox.prototype.__handlers__ = ["_BoxLayout__orientation_changed", "_BoxLayout__padding_changed", "_BoxLayout__set_flexes", "_BoxLayout__spacing_changed", "_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
VBox.prototype.__local_properties__ = ["parent", "size"];
VBox.prototype.__properties__ = ["base_size", "children", "container", "css_class", "flex", "icon", "orientation", "padding", "parent", "pos", "size", "spacing", "style", "tabindex", "title"];


var HBox = flexx.classes.HBox = function () {
    _pyfunc_op_instantiate(this, arguments);
}
HBox.prototype = Object.create(flexx.classes.BoxLayout.prototype);
HBox.prototype._base_class = flexx.classes.BoxLayout.prototype;
HBox.prototype._class_name = "HBox";

HBox.prototype._DEFAULT_ORIENTATION = "h";
HBox.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
HBox.prototype.__handlers__ = ["_BoxLayout__orientation_changed", "_BoxLayout__padding_changed", "_BoxLayout__set_flexes", "_BoxLayout__spacing_changed", "_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
HBox.prototype.__local_properties__ = ["parent", "size"];
HBox.prototype.__properties__ = ["base_size", "children", "container", "css_class", "flex", "icon", "orientation", "padding", "parent", "pos", "size", "spacing", "style", "tabindex", "title"];


var VBoxPanel = flexx.classes.VBoxPanel = function () {
    _pyfunc_op_instantiate(this, arguments);
}
VBoxPanel.prototype = Object.create(flexx.classes.BoxPanel.prototype);
VBoxPanel.prototype._base_class = flexx.classes.BoxPanel.prototype;
VBoxPanel.prototype._class_name = "VBoxPanel";

VBoxPanel.prototype._DEFAULT_ORIENTATION = "v";
VBoxPanel.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
VBoxPanel.prototype.__handlers__ = ["_BoxPanel__orientation_changed", "_BoxPanel__set_flexes", "_BoxPanel__spacing_changed", "_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
VBoxPanel.prototype.__local_properties__ = ["parent", "size"];
VBoxPanel.prototype.__properties__ = ["base_size", "children", "container", "css_class", "flex", "icon", "orientation", "parent", "pos", "size", "spacing", "style", "tabindex", "title"];


var HBoxPanel = flexx.classes.HBoxPanel = function () {
    _pyfunc_op_instantiate(this, arguments);
}
HBoxPanel.prototype = Object.create(flexx.classes.BoxPanel.prototype);
HBoxPanel.prototype._base_class = flexx.classes.BoxPanel.prototype;
HBoxPanel.prototype._class_name = "HBoxPanel";

HBoxPanel.prototype._DEFAULT_ORIENTATION = "h";
HBoxPanel.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
HBoxPanel.prototype.__handlers__ = ["_BoxPanel__orientation_changed", "_BoxPanel__set_flexes", "_BoxPanel__spacing_changed", "_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
HBoxPanel.prototype.__local_properties__ = ["parent", "size"];
HBoxPanel.prototype.__properties__ = ["base_size", "children", "container", "css_class", "flex", "icon", "orientation", "parent", "pos", "size", "spacing", "style", "tabindex", "title"];


return {BaseBoxLayout: BaseBoxLayout, BoxLayout: BoxLayout, BoxPanel: BoxPanel, HBox: HBox, HBoxPanel: HBoxPanel, VBox: VBox, VBoxPanel: VBoxPanel, _phosphor_boxpanel: _phosphor_boxpanel};
});
