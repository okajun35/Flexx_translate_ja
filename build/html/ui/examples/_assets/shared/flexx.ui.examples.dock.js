/* ======================= flexx.ui.examples.dock =======================*/

/* Autogenerated code from Flexx. Code Subject to the BSD-2-clause license. */



flexx.define("flexx.ui.examples.dock", ["pyscript-std.js", "flexx.ui.layouts._dock"], function (_py, flexx_ui_layouts__dock) {

"use strict";

var _pyfunc_zip = _py._pyfunc_zip, _pyfunc_pow = _py._pyfunc_pow, _pyfunc_reversed = _py._pyfunc_reversed, _pyfunc_dict = _py._pyfunc_dict, _pyfunc_any = _py._pyfunc_any, _pyfunc_op_equals = _py._pyfunc_op_equals, _pyfunc_list = _py._pyfunc_list, _pyfunc_enumerate = _py._pyfunc_enumerate, _pyfunc_setattr = _py._pyfunc_setattr, _pyfunc_time = _py._pyfunc_time, _pyfunc_truthy = _py._pyfunc_truthy, _pyfunc_op_instantiate = _py._pyfunc_op_instantiate, _pyfunc_perf_counter = _py._pyfunc_perf_counter, _pyfunc_int = _py._pyfunc_int, _pyfunc_float = _py._pyfunc_float, _pyfunc_sum = _py._pyfunc_sum, _pyfunc_op_mult = _py._pyfunc_op_mult, _pyfunc_sorted = _py._pyfunc_sorted, _pyfunc_filter = _py._pyfunc_filter, _pyfunc_hasattr = _py._pyfunc_hasattr, _pyfunc_op_add = _py._pyfunc_op_add, _pyfunc_bool = _py._pyfunc_bool, _pyfunc_abs = _py._pyfunc_abs, _pyfunc_op_contains = _py._pyfunc_op_contains, _pyfunc_all = _py._pyfunc_all, _pyfunc_getattr = _py._pyfunc_getattr, _pyfunc_range = _py._pyfunc_range, _pyfunc_divmod = _py._pyfunc_divmod, _pyfunc_round = _py._pyfunc_round, _pyfunc_delattr = _py._pyfunc_delattr, _pyfunc_map = _py._pyfunc_map, _pyfunc_str = _py._pyfunc_str, _pyfunc_repr = _py._pyfunc_repr;
var _pymeth_remove = _py._pymeth_remove, _pymeth_index = _py._pymeth_index, _pymeth_capitalize = _py._pymeth_capitalize, _pymeth_isnumeric = _py._pymeth_isnumeric, _pymeth_isalpha = _py._pymeth_isalpha, _pymeth_partition = _py._pymeth_partition, _pymeth_rstrip = _py._pymeth_rstrip, _pymeth_repeat = _py._pymeth_repeat, _pymeth_setdefault = _py._pymeth_setdefault, _pymeth_islower = _py._pymeth_islower, _pymeth_casefold = _py._pymeth_casefold, _pymeth_isupper = _py._pymeth_isupper, _pymeth_swapcase = _py._pymeth_swapcase, _pymeth_extend = _py._pymeth_extend, _pymeth_lstrip = _py._pymeth_lstrip, _pymeth_clear = _py._pymeth_clear, _pymeth_isidentifier = _py._pymeth_isidentifier, _pymeth_zfill = _py._pymeth_zfill, _pymeth_popitem = _py._pymeth_popitem, _pymeth_split = _py._pymeth_split, _pymeth_reverse = _py._pymeth_reverse, _pymeth_isspace = _py._pymeth_isspace, _pymeth_rjust = _py._pymeth_rjust, _pymeth_values = _py._pymeth_values, _pymeth_sort = _py._pymeth_sort, _pymeth_copy = _py._pymeth_copy, _pymeth_endswith = _py._pymeth_endswith, _pymeth_replace = _py._pymeth_replace, _pymeth_rindex = _py._pymeth_rindex, _pymeth_rpartition = _py._pymeth_rpartition, _pymeth_title = _py._pymeth_title, _pymeth_join = _py._pymeth_join, _pymeth_splitlines = _py._pymeth_splitlines, _pymeth_rsplit = _py._pymeth_rsplit, _pymeth_startswith = _py._pymeth_startswith, _pymeth_expandtabs = _py._pymeth_expandtabs, _pymeth_keys = _py._pymeth_keys, _pymeth_append = _py._pymeth_append, _pymeth_lower = _py._pymeth_lower, _pymeth_isalnum = _py._pymeth_isalnum, _pymeth_items = _py._pymeth_items, _pymeth_count = _py._pymeth_count, _pymeth_get = _py._pymeth_get, _pymeth_translate = _py._pymeth_translate, _pymeth_center = _py._pymeth_center, _pymeth_find = _py._pymeth_find, _pymeth_update = _py._pymeth_update, _pymeth_ljust = _py._pymeth_ljust, _pymeth_istitle = _py._pymeth_istitle, _pymeth_upper = _py._pymeth_upper, _pymeth_insert = _py._pymeth_insert, _pymeth_pop = _py._pymeth_pop, _pymeth_strip = _py._pymeth_strip, _pymeth_rfind = _py._pymeth_rfind;





var Dock = flexx.classes.Dock = function () {
    _pyfunc_op_instantiate(this, arguments);
}
Dock.prototype = Object.create(flexx.classes.DockPanel.prototype);
Dock.prototype._base_class = flexx.classes.DockPanel.prototype;
Dock.prototype._class_name = "Dock";

Dock.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
Dock.prototype.__handlers__ = ["_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "check_size"];
Dock.prototype.__local_properties__ = ["parent", "size"];
Dock.prototype.__properties__ = ["base_size", "children", "container", "css_class", "flex", "icon", "parent", "pos", "size", "style", "tabindex", "title"];


return {Dock: Dock};
});
