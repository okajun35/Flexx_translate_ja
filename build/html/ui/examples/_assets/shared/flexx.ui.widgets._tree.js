/* ======================= flexx.ui.widgets._tree =======================*/

/* Autogenerated code from Flexx. Code Subject to the BSD-2-clause license. */



flexx.define("flexx.ui.widgets._tree", ["pyscript-std.js", "flexx.ui._widget", "flexx.app._model"], function (_py, flexx_ui__widget, flexx_app__model) {

"use strict";

var _pyfunc_zip = _py._pyfunc_zip, _pyfunc_pow = _py._pyfunc_pow, _pyfunc_reversed = _py._pyfunc_reversed, _pyfunc_dict = _py._pyfunc_dict, _pyfunc_any = _py._pyfunc_any, _pyfunc_op_equals = _py._pyfunc_op_equals, _pyfunc_list = _py._pyfunc_list, _pyfunc_enumerate = _py._pyfunc_enumerate, _pyfunc_setattr = _py._pyfunc_setattr, _pyfunc_time = _py._pyfunc_time, _pyfunc_truthy = _py._pyfunc_truthy, _pyfunc_op_instantiate = _py._pyfunc_op_instantiate, _pyfunc_perf_counter = _py._pyfunc_perf_counter, _pyfunc_int = _py._pyfunc_int, _pyfunc_float = _py._pyfunc_float, _pyfunc_sum = _py._pyfunc_sum, _pyfunc_op_mult = _py._pyfunc_op_mult, _pyfunc_sorted = _py._pyfunc_sorted, _pyfunc_filter = _py._pyfunc_filter, _pyfunc_hasattr = _py._pyfunc_hasattr, _pyfunc_op_add = _py._pyfunc_op_add, _pyfunc_bool = _py._pyfunc_bool, _pyfunc_abs = _py._pyfunc_abs, _pyfunc_op_contains = _py._pyfunc_op_contains, _pyfunc_all = _py._pyfunc_all, _pyfunc_getattr = _py._pyfunc_getattr, _pyfunc_range = _py._pyfunc_range, _pyfunc_divmod = _py._pyfunc_divmod, _pyfunc_round = _py._pyfunc_round, _pyfunc_delattr = _py._pyfunc_delattr, _pyfunc_map = _py._pyfunc_map, _pyfunc_str = _py._pyfunc_str, _pyfunc_repr = _py._pyfunc_repr;
var _pymeth_remove = _py._pymeth_remove, _pymeth_index = _py._pymeth_index, _pymeth_capitalize = _py._pymeth_capitalize, _pymeth_isnumeric = _py._pymeth_isnumeric, _pymeth_isalpha = _py._pymeth_isalpha, _pymeth_partition = _py._pymeth_partition, _pymeth_rstrip = _py._pymeth_rstrip, _pymeth_repeat = _py._pymeth_repeat, _pymeth_setdefault = _py._pymeth_setdefault, _pymeth_islower = _py._pymeth_islower, _pymeth_casefold = _py._pymeth_casefold, _pymeth_isupper = _py._pymeth_isupper, _pymeth_swapcase = _py._pymeth_swapcase, _pymeth_extend = _py._pymeth_extend, _pymeth_lstrip = _py._pymeth_lstrip, _pymeth_clear = _py._pymeth_clear, _pymeth_isidentifier = _py._pymeth_isidentifier, _pymeth_zfill = _py._pymeth_zfill, _pymeth_popitem = _py._pymeth_popitem, _pymeth_split = _py._pymeth_split, _pymeth_reverse = _py._pymeth_reverse, _pymeth_isspace = _py._pymeth_isspace, _pymeth_rjust = _py._pymeth_rjust, _pymeth_values = _py._pymeth_values, _pymeth_sort = _py._pymeth_sort, _pymeth_copy = _py._pymeth_copy, _pymeth_endswith = _py._pymeth_endswith, _pymeth_replace = _py._pymeth_replace, _pymeth_rindex = _py._pymeth_rindex, _pymeth_rpartition = _py._pymeth_rpartition, _pymeth_title = _py._pymeth_title, _pymeth_join = _py._pymeth_join, _pymeth_splitlines = _py._pymeth_splitlines, _pymeth_rsplit = _py._pymeth_rsplit, _pymeth_startswith = _py._pymeth_startswith, _pymeth_expandtabs = _py._pymeth_expandtabs, _pymeth_keys = _py._pymeth_keys, _pymeth_append = _py._pymeth_append, _pymeth_lower = _py._pymeth_lower, _pymeth_isalnum = _py._pymeth_isalnum, _pymeth_items = _py._pymeth_items, _pymeth_count = _py._pymeth_count, _pymeth_get = _py._pymeth_get, _pymeth_translate = _py._pymeth_translate, _pymeth_center = _py._pymeth_center, _pymeth_find = _py._pymeth_find, _pymeth_update = _py._pymeth_update, _pymeth_ljust = _py._pymeth_ljust, _pymeth_istitle = _py._pymeth_istitle, _pymeth_upper = _py._pymeth_upper, _pymeth_insert = _py._pymeth_insert, _pymeth_pop = _py._pymeth_pop, _pymeth_strip = _py._pymeth_strip, _pymeth_rfind = _py._pymeth_rfind;





var TreeWidget = flexx.classes.TreeWidget = function () {
    _pyfunc_op_instantiate(this, arguments);
}
TreeWidget.prototype = Object.create(flexx.classes.Widget.prototype);
TreeWidget.prototype._base_class = flexx.classes.Widget.prototype;
TreeWidget.prototype._class_name = "TreeWidget";

TreeWidget.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
TreeWidget.prototype.__handlers__ = ["_TreeWidget__check_listmode", "_TreeWidget__item_clicked", "_TreeWidget__max_selected_changed", "_TreeWidget__update", "_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
TreeWidget.prototype.__local_properties__ = ["parent", "size"];
TreeWidget.prototype.__properties__ = ["base_size", "children", "container", "css_class", "flex", "icon", "items", "max_selected", "parent", "pos", "size", "style", "tabindex", "title"];

TreeWidget.prototype._TreeWidget__check_listmode = function () {
    var events, i, listmode, stub1_seq, stub2_itr;
    events = Array.prototype.slice.call(arguments);
    listmode = true;
    stub1_seq = this.items;
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        i = stub1_seq[stub2_itr];
        listmode = _pyfunc_truthy(listmode) && _pyfunc_op_equals(i.items.length, 0) && (i.collapsed === null);
    }
    if (_pyfunc_truthy(listmode)) {
        this.node.classList.add("flx-listmode");
    } else {
        _pymeth_remove.call(this.node.classList, "flx-listmode");
    }
    return null;
};
TreeWidget.prototype._TreeWidget__check_listmode.nobind = true;
TreeWidget.prototype._TreeWidget__check_listmode._connection_strings = ["items", "items*.items"];

TreeWidget.prototype._TreeWidget__item_clicked = function () {
    var count, ev, events, gets_selected, i, item, stub1_seq, stub2_itr, stub3_seq, stub4_itr, stub5_seq, stub6_itr;
    events = Array.prototype.slice.call(arguments);
    if (_pyfunc_op_equals(this.max_selected, 0)) {
    } else if (_pyfunc_truthy(this.max_selected < 0)) {
        stub1_seq = events;
        if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
            stub1_seq = Object.keys(stub1_seq);
        }
        for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
            ev = stub1_seq[stub2_itr];
            item = ev.source;
            item.selected = !_pyfunc_truthy(item.selected);
        }
    } else if (_pyfunc_op_equals(this.max_selected, 1)) {
        item = events[events.length -1].source;
        gets_selected = !_pyfunc_truthy(item.selected);
        if (_pyfunc_truthy(gets_selected)) {
            stub3_seq = this.get_all_items();
            if ((typeof stub3_seq === "object") && (!Array.isArray(stub3_seq))) {
                stub3_seq = Object.keys(stub3_seq);
            }
            for (stub4_itr = 0; stub4_itr < stub3_seq.length; stub4_itr += 1) {
                i = stub3_seq[stub4_itr];
                if ((_pyfunc_truthy(i.selected) && (i !== item))) {
                    i.selected = false;
                }
            }
        }
        item.selected = gets_selected;
    } else {
        item = events[events.length -1].source;
        if (_pyfunc_truthy(item.selected)) {
            item.selected = false;
        } else {
            count = 0;
            stub5_seq = this.get_all_items();
            if ((typeof stub5_seq === "object") && (!Array.isArray(stub5_seq))) {
                stub5_seq = Object.keys(stub5_seq);
            }
            for (stub6_itr = 0; stub6_itr < stub5_seq.length; stub6_itr += 1) {
                i = stub5_seq[stub6_itr];
                count=_pyfunc_op_add(count, _pyfunc_int(i.selected))
            }
            if (_pyfunc_truthy(count < this.max_selected)) {
                item.selected = true;
            }
        }
    }
    return null;
};
TreeWidget.prototype._TreeWidget__item_clicked.nobind = true;
TreeWidget.prototype._TreeWidget__item_clicked._connection_strings = ["!items**.mouse_click"];

TreeWidget.prototype._TreeWidget__max_selected_changed = function () {
    var count, events, i, stub1_seq, stub2_itr, stub3_seq, stub4_itr, stub5_seq, stub6_itr;
    events = Array.prototype.slice.call(arguments);
    if (_pyfunc_op_equals(this.max_selected, 0)) {
        stub1_seq = this.get_all_items();
        if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
            stub1_seq = Object.keys(stub1_seq);
        }
        for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
            i = stub1_seq[stub2_itr];
            i.selected = false;
        }
    } else if (_pyfunc_truthy(this.max_selected < 0)) {
    } else {
        count = 0;
        stub3_seq = this.get_all_items();
        if ((typeof stub3_seq === "object") && (!Array.isArray(stub3_seq))) {
            stub3_seq = Object.keys(stub3_seq);
        }
        for (stub4_itr = 0; stub4_itr < stub3_seq.length; stub4_itr += 1) {
            i = stub3_seq[stub4_itr];
            count=_pyfunc_op_add(count, _pyfunc_int(i.selected))
        }
        if (_pyfunc_truthy(count > this.max_selected)) {
            stub5_seq = this.items;
            if ((typeof stub5_seq === "object") && (!Array.isArray(stub5_seq))) {
                stub5_seq = Object.keys(stub5_seq);
            }
            for (stub6_itr = 0; stub6_itr < stub5_seq.length; stub6_itr += 1) {
                i = stub5_seq[stub6_itr];
                i.selected = false;
            }
        }
    }
    return null;
};
TreeWidget.prototype._TreeWidget__max_selected_changed.nobind = true;
TreeWidget.prototype._TreeWidget__max_selected_changed._connection_strings = ["max_selected"];

TreeWidget.prototype._TreeWidget__update = function () {
    var events, i, stub1_seq, stub2_itr;
    events = Array.prototype.slice.call(arguments);
    while (this._ul.firstChild) {
        this._ul.removeChild(this._ul.firstChild);
    }
    stub1_seq = this.items;
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        i = stub1_seq[stub2_itr];
        this._ul.appendChild(i.node);
    }
    return null;
};
TreeWidget.prototype._TreeWidget__update.nobind = true;
TreeWidget.prototype._TreeWidget__update._connection_strings = ["items"];

TreeWidget.prototype._init_phosphor_and_node = function () {
    this.phosphor = this._create_phosphor_widget("div");
    this.node = this.phosphor.node;
    this._ul = window.document.createElement("ul");
    this.node.appendChild(this._ul);
    return null;
};

TreeWidget.prototype.get_all_items = function () {
    var collect, items;
    items = [];
    collect = (function flx_collect (x) {
        var i, stub1_seq, stub2_itr;
        _pymeth_extend.call(items, x.items);
        stub1_seq = x.items;
        if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
            stub1_seq = Object.keys(stub1_seq);
        }
        for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
            i = stub1_seq[stub2_itr];
            if (_pyfunc_truthy(i)) {
                collect(i);
            }
        }
        return null;
    }).bind(this);

    collect(this);
    return items;
};

TreeWidget.prototype.items = function (items) {
    items = (items === undefined) ? []: items;
    return _pyfunc_list(items);
};
TreeWidget.prototype.items.nobind = true;
TreeWidget.prototype.items.default = [];
TreeWidget.prototype.items.emitter_type = "Property";

TreeWidget.prototype.max_selected = function (v) {
    v = (v === undefined) ? 0: v;
    return _pyfunc_int(v);
};
TreeWidget.prototype.max_selected.nobind = true;
TreeWidget.prototype.max_selected.default = 0;
TreeWidget.prototype.max_selected.emitter_type = "Property";



var TreeItem = flexx.classes.TreeItem = function () {
    _pyfunc_op_instantiate(this, arguments);
}
TreeItem.prototype = Object.create(flexx.classes.Model.prototype);
TreeItem.prototype._base_class = flexx.classes.Model.prototype;
TreeItem.prototype._class_name = "TreeItem";

TreeItem.prototype._HTML = "<span class='flx-TreeItem'><span class='padder'></span><span class='collapsebut'></span><span class='checkbut'></span><span class='title'></span><span class='text'></span></span><ul></ul>";
TreeItem.prototype.__emitters__ = ["mouse_click", "mouse_double_click"];
TreeItem.prototype.__handlers__ = ["_TreeItem__checked_changed", "_TreeItem__collapsed_changed", "_TreeItem__selected_changed", "_TreeItem__text_changed", "_TreeItem__title_changed", "_TreeItem__update", "_TreeItem__visible_changed"];
TreeItem.prototype.__local_properties__ = [];
TreeItem.prototype.__properties__ = ["checked", "collapsed", "items", "selected", "text", "title", "visible"];

TreeItem.prototype._TreeItem__checked_changed = function () {
    var events, node, stub1_seq, stub2_itr;
    events = Array.prototype.slice.call(arguments);
    stub1_seq = [this.node, this._row];
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        node = stub1_seq[stub2_itr];
        if ((this.checked === null)) {
            node.classList.add("checked-null");
            _pymeth_remove.call(node.classList, "checked-true");
            _pymeth_remove.call(node.classList, "checked-false");
        } else if (_pyfunc_truthy(this.checked)) {
            _pymeth_remove.call(node.classList, "checked-null");
            node.classList.add("checked-true");
            _pymeth_remove.call(node.classList, "checked-false");
        } else {
            _pymeth_remove.call(node.classList, "checked-null");
            _pymeth_remove.call(node.classList, "checked-true");
            node.classList.add("checked-false");
        }
    }
    return null;
};
TreeItem.prototype._TreeItem__checked_changed.nobind = true;
TreeItem.prototype._TreeItem__checked_changed._connection_strings = ["checked"];

TreeItem.prototype._TreeItem__collapsed_changed = function () {
    var events, node, stub1_seq, stub2_itr;
    events = Array.prototype.slice.call(arguments);
    stub1_seq = [this.node, this._row];
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        node = stub1_seq[stub2_itr];
        if (((this.collapsed === null) && ((!_pyfunc_truthy(this.items))))) {
            node.classList.add("collapsed-null");
            _pymeth_remove.call(node.classList, "collapsed-true");
            _pymeth_remove.call(node.classList, "collapsed-false");
        } else if (_pyfunc_truthy(this.collapsed)) {
            _pymeth_remove.call(node.classList, "collapsed-null");
            node.classList.add("collapsed-true");
            _pymeth_remove.call(node.classList, "collapsed-false");
        } else {
            _pymeth_remove.call(node.classList, "collapsed-null");
            _pymeth_remove.call(node.classList, "collapsed-true");
            node.classList.add("collapsed-false");
        }
    }
    return null;
};
TreeItem.prototype._TreeItem__collapsed_changed.nobind = true;
TreeItem.prototype._TreeItem__collapsed_changed._connection_strings = ["collapsed", "items"];

TreeItem.prototype._TreeItem__selected_changed = function () {
    var events, node, stub1_seq, stub2_itr;
    events = Array.prototype.slice.call(arguments);
    stub1_seq = [this.node, this._row];
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        node = stub1_seq[stub2_itr];
        if (_pyfunc_truthy(this.selected)) {
            node.classList.add("selected-true");
            _pymeth_remove.call(node.classList, "selected-false");
        } else {
            _pymeth_remove.call(node.classList, "selected-true");
            node.classList.add("selected-false");
        }
    }
    return null;
};
TreeItem.prototype._TreeItem__selected_changed.nobind = true;
TreeItem.prototype._TreeItem__selected_changed._connection_strings = ["selected"];

TreeItem.prototype._TreeItem__text_changed = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    this._text.innerHTML = this.text;
    return null;
};
TreeItem.prototype._TreeItem__text_changed.nobind = true;
TreeItem.prototype._TreeItem__text_changed._connection_strings = ["text"];

TreeItem.prototype._TreeItem__title_changed = function () {
    var events;
    events = Array.prototype.slice.call(arguments);
    this._title.innerHTML = this.title;
    return null;
};
TreeItem.prototype._TreeItem__title_changed.nobind = true;
TreeItem.prototype._TreeItem__title_changed._connection_strings = ["title"];

TreeItem.prototype._TreeItem__update = function () {
    var events, i, stub1_seq, stub2_itr;
    events = Array.prototype.slice.call(arguments);
    while (this._ul.firstChild) {
        this._ul.removeChild(this._ul.firstChild);
    }
    stub1_seq = this.items;
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        i = stub1_seq[stub2_itr];
        this._ul.appendChild(i.node);
    }
    return null;
};
TreeItem.prototype._TreeItem__update.nobind = true;
TreeItem.prototype._TreeItem__update._connection_strings = ["items"];

TreeItem.prototype._TreeItem__visible_changed = function () {
    var events, node, stub1_seq, stub2_itr;
    events = Array.prototype.slice.call(arguments);
    stub1_seq = [this.node, this._row];
    if ((typeof stub1_seq === "object") && (!Array.isArray(stub1_seq))) {
        stub1_seq = Object.keys(stub1_seq);
    }
    for (stub2_itr = 0; stub2_itr < stub1_seq.length; stub2_itr += 1) {
        node = stub1_seq[stub2_itr];
        if (_pyfunc_truthy(this.visible)) {
            node.classList.add("visible-true");
            _pymeth_remove.call(node.classList, "visible-false");
        } else {
            _pymeth_remove.call(node.classList, "visible-true");
            node.classList.add("visible-false");
        }
    }
    return null;
};
TreeItem.prototype._TreeItem__visible_changed.nobind = true;
TreeItem.prototype._TreeItem__visible_changed._connection_strings = ["visible"];

TreeItem.prototype._on_click = function (e) {
    if ((e.target === this._collapsebut)) {
        this.collapsed = !_pyfunc_truthy(this.collapsed);
    } else if ((e.target === this._checkbut)) {
        this.checked = !_pyfunc_truthy(this.checked);
    } else {
        this.mouse_click();
    }
    return null;
};

TreeItem.prototype.checked = function (v) {
    v = (v === undefined) ? null: v;
    if ((v === null)) {
        return null;
    }
    return _pyfunc_bool(v);
};
TreeItem.prototype.checked.nobind = true;
TreeItem.prototype.checked.default = null;
TreeItem.prototype.checked.emitter_type = "Property";

TreeItem.prototype.collapsed = function (v) {
    v = (v === undefined) ? null: v;
    if ((v === null)) {
        return null;
    }
    return _pyfunc_bool(v);
};
TreeItem.prototype.collapsed.nobind = true;
TreeItem.prototype.collapsed.default = null;
TreeItem.prototype.collapsed.emitter_type = "Property";

TreeItem.prototype.init = function () {
    this.node = window.document.createElement("li");
    this.node.innerHTML = this._HTML;
    this._row = this.node.childNodes[0];
    this._ul = this.node.childNodes[1];
    this._collapsebut = this._row.childNodes[1];
    this._checkbut = this._row.childNodes[2];
    this._title = this._row.childNodes[3];
    this._text = this._row.childNodes[4];
    this._row.addEventListener("click", this._on_click);
    this._row.addEventListener("dblclick", this.mouse_double_click);
    return null;
};

TreeItem.prototype.items = function (items) {
    items = (items === undefined) ? []: items;
    return _pyfunc_list(items);
};
TreeItem.prototype.items.nobind = true;
TreeItem.prototype.items.default = [];
TreeItem.prototype.items.emitter_type = "Property";

TreeItem.prototype.mouse_click = function () {
    return {};
};
TreeItem.prototype.mouse_click.nobind = true;
TreeItem.prototype.mouse_click.emitter_type = "Emitter";

TreeItem.prototype.mouse_double_click = function (e) {
    e = (e === undefined) ? null: e;
    return {};
};
TreeItem.prototype.mouse_double_click.nobind = true;
TreeItem.prototype.mouse_double_click.emitter_type = "Emitter";

TreeItem.prototype.selected = function (v) {
    v = (v === undefined) ? false: v;
    return _pyfunc_bool(v);
};
TreeItem.prototype.selected.nobind = true;
TreeItem.prototype.selected.default = false;
TreeItem.prototype.selected.emitter_type = "Property";

TreeItem.prototype.text = function (text) {
    text = (text === undefined) ? "": text;
    return _pyfunc_str(text);
};
TreeItem.prototype.text.nobind = true;
TreeItem.prototype.text.default = "";
TreeItem.prototype.text.emitter_type = "Property";

TreeItem.prototype.title = function (title) {
    title = (title === undefined) ? "": title;
    return _pyfunc_str(title);
};
TreeItem.prototype.title.nobind = true;
TreeItem.prototype.title.default = "";
TreeItem.prototype.title.emitter_type = "Property";

TreeItem.prototype.visible = function (v) {
    v = (v === undefined) ? true: v;
    return _pyfunc_bool(v);
};
TreeItem.prototype.visible.nobind = true;
TreeItem.prototype.visible.default = true;
TreeItem.prototype.visible.emitter_type = "Property";



return {TreeItem: TreeItem, TreeWidget: TreeWidget};
});
