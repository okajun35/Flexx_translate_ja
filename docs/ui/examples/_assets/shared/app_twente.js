/* ============================= app_twente =============================*/

/* Autogenerated code from Flexx. Code Subject to the BSD-2-clause license. */



flexx.define("app_twente", ["pyscript-std.js", "flexx.ui._widget"], function (_py, flexx_ui__widget) {

"use strict";

var _pyfunc_zip = _py._pyfunc_zip, _pyfunc_pow = _py._pyfunc_pow, _pyfunc_reversed = _py._pyfunc_reversed, _pyfunc_dict = _py._pyfunc_dict, _pyfunc_any = _py._pyfunc_any, _pyfunc_op_equals = _py._pyfunc_op_equals, _pyfunc_list = _py._pyfunc_list, _pyfunc_enumerate = _py._pyfunc_enumerate, _pyfunc_setattr = _py._pyfunc_setattr, _pyfunc_time = _py._pyfunc_time, _pyfunc_truthy = _py._pyfunc_truthy, _pyfunc_op_instantiate = _py._pyfunc_op_instantiate, _pyfunc_perf_counter = _py._pyfunc_perf_counter, _pyfunc_int = _py._pyfunc_int, _pyfunc_float = _py._pyfunc_float, _pyfunc_sum = _py._pyfunc_sum, _pyfunc_op_mult = _py._pyfunc_op_mult, _pyfunc_sorted = _py._pyfunc_sorted, _pyfunc_filter = _py._pyfunc_filter, _pyfunc_hasattr = _py._pyfunc_hasattr, _pyfunc_op_add = _py._pyfunc_op_add, _pyfunc_bool = _py._pyfunc_bool, _pyfunc_abs = _py._pyfunc_abs, _pyfunc_op_contains = _py._pyfunc_op_contains, _pyfunc_all = _py._pyfunc_all, _pyfunc_getattr = _py._pyfunc_getattr, _pyfunc_range = _py._pyfunc_range, _pyfunc_divmod = _py._pyfunc_divmod, _pyfunc_round = _py._pyfunc_round, _pyfunc_delattr = _py._pyfunc_delattr, _pyfunc_map = _py._pyfunc_map, _pyfunc_str = _py._pyfunc_str, _pyfunc_repr = _py._pyfunc_repr;
var _pymeth_remove = _py._pymeth_remove, _pymeth_index = _py._pymeth_index, _pymeth_capitalize = _py._pymeth_capitalize, _pymeth_isnumeric = _py._pymeth_isnumeric, _pymeth_isalpha = _py._pymeth_isalpha, _pymeth_partition = _py._pymeth_partition, _pymeth_rstrip = _py._pymeth_rstrip, _pymeth_repeat = _py._pymeth_repeat, _pymeth_setdefault = _py._pymeth_setdefault, _pymeth_islower = _py._pymeth_islower, _pymeth_casefold = _py._pymeth_casefold, _pymeth_isupper = _py._pymeth_isupper, _pymeth_swapcase = _py._pymeth_swapcase, _pymeth_extend = _py._pymeth_extend, _pymeth_lstrip = _py._pymeth_lstrip, _pymeth_clear = _py._pymeth_clear, _pymeth_isidentifier = _py._pymeth_isidentifier, _pymeth_zfill = _py._pymeth_zfill, _pymeth_popitem = _py._pymeth_popitem, _pymeth_split = _py._pymeth_split, _pymeth_reverse = _py._pymeth_reverse, _pymeth_isspace = _py._pymeth_isspace, _pymeth_rjust = _py._pymeth_rjust, _pymeth_values = _py._pymeth_values, _pymeth_sort = _py._pymeth_sort, _pymeth_copy = _py._pymeth_copy, _pymeth_endswith = _py._pymeth_endswith, _pymeth_replace = _py._pymeth_replace, _pymeth_rindex = _py._pymeth_rindex, _pymeth_rpartition = _py._pymeth_rpartition, _pymeth_title = _py._pymeth_title, _pymeth_join = _py._pymeth_join, _pymeth_splitlines = _py._pymeth_splitlines, _pymeth_rsplit = _py._pymeth_rsplit, _pymeth_startswith = _py._pymeth_startswith, _pymeth_expandtabs = _py._pymeth_expandtabs, _pymeth_keys = _py._pymeth_keys, _pymeth_append = _py._pymeth_append, _pymeth_lower = _py._pymeth_lower, _pymeth_isalnum = _py._pymeth_isalnum, _pymeth_items = _py._pymeth_items, _pymeth_count = _py._pymeth_count, _pymeth_get = _py._pymeth_get, _pymeth_translate = _py._pymeth_translate, _pymeth_center = _py._pymeth_center, _pymeth_find = _py._pymeth_find, _pymeth_update = _py._pymeth_update, _pymeth_ljust = _py._pymeth_ljust, _pymeth_istitle = _py._pymeth_istitle, _pymeth_upper = _py._pymeth_upper, _pymeth_insert = _py._pymeth_insert, _pymeth_pop = _py._pymeth_pop, _pymeth_strip = _py._pymeth_strip, _pymeth_rfind = _py._pymeth_rfind;

var data = [[3.5, 1.9, 1.1, -1.1, -0.1, 1.7, 3.2, 1.6, 1.2, 2.1, 1.4, 3.1, -6.3, -0.1, 2.4, -0.3, 3.2, 0.7, 3.7, -0.4, 2.2, -0.3, 2.3, 5.1, 6.2, 2.6, 2.2, 2.7, -3.9, -0.8, 1.6, 0.3, 5.7, 2.3, -4.6, 1.6, -4.0, 5.8, 4.1, 5.0, 2.9, 2.2, 4.2, 4.4, 2.7, -1.6, -1.7, 4.3, 4.5, 3.7, 2.2, 3.9, 1.6, 2.7, 4.3, 0.4, 6.1, 5.9, 0.1, -1.7, 2.7, 3.6, 1.5, 4.8], [3.5, 2.0, 1.5, -1.0, -0.5, -7.1, 4.9, 3.2, 0.7, 2.5, 6.1, 2.1, -3.8, 2.8, 1.1, 3.7, 4.8, 1.3, -0.7, 0.4, 3.2, 3.4, 2.3, 4.2, 2.7, 1.9, 4.5, 0.2, -2.2, 3.8, 0.9, 2.3, 0.0, 1.4, -1.4, -4.6, 1.7, 4.2, 4.8, 7.3, -0.9, 4.7, 1.2, 0.6, 6.0, -1.0, 5.8, 5.7, 2.6, 5.2, 3.7, 6.5, 0.7, 4.0, 1.4, 1.8, 5.4, 4.7, 2.6, 0.9, 3.6, 0.1, 0.9, 6.4], [3.4, 4.3, 4.7, 5.7, 1.6, 5.0, 8.0, 1.5, 7.2, 5.5, 7.1, 1.4, 4.5, 2.3, 3.7, 4.6, 6.4, 5.9, 1.3, 2.1, 2.3, 6.1, 4.9, 5.5, 4.3, 2.2, 6.8, 6.1, 4.1, 3.8, 8.1, 5.0, 5.6, 3.3, 3.5, 4.5, 1.3, 4.3, 7.7, 7.9, 8.3, 6.4, 5.1, 7.0, 4.6, 2.3, 7.2, 6.7, 6.6, 6.3, 4.2, 6.4, 6.8, 5.3, 5.8, 3.2, 7.4, 5.3, 5.5, 5.8, 5.2, 7.7, 1.2, 8.1], [7.4, 10.7, 9.1, 6.5, 8.2, 5.0, 8.3, 6.2, 10.3, 8.8, 10.4, 8.0, 9.1, 9.1, 7.6, 8.7, 7.0, 9.5, 7.7, 5.6, 7.8, 7.1, 5.4, 8.5, 6.9, 7.1, 6.0, 6.7, 7.3, 7.4, 8.7, 7.1, 8.9, 7.1, 8.1, 6.8, 10.3, 8.1, 6.5, 8.4, 8.1, 8.3, 11.2, 8.1, 8.9, 8.9, 7.0, 9.0, 9.7, 10.2, 7.9, 8.9, 9.3, 10.3, 10.2, 8.5, 12.5, 8.3, 12.5, 9.3, 12.4, 8.2, 8.2, 11.8], [12.0, 12.9, 13.3, 12.8, 10.0, 12.7, 10.2, 12.9, 13.1, 13.0, 10.6, 9.9, 11.2, 14.3, 11.7, 13.5, 12.8, 10.6, 12.9, 12.5, 13.8, 11.6, 11.9, 11.2, 10.8, 12.9, 11.7, 12.1, 11.6, 11.5, 13.8, 12.2, 11.1, 10.0, 13.2, 13.7, 9.9, 14.4, 13.8, 13.8, 9.7, 15.4, 14.2, 12.3, 12.4, 10.6, 12.4, 14.4, 13.5, 14.5, 14.0, 13.5, 13.4, 11.6, 12.5, 14.3, 13.9, 15.0, 13.7, 10.0, 13.8, 14.5, 11.6, 12.7], [15.4, 14.9, 16.2, 15.6, 14.6, 13.0, 16.6, 14.8, 16.4, 16.1, 15.7, 13.5, 15.8, 15.6, 15.0, 17.1, 14.6, 15.5, 14.5, 17.0, 13.8, 13.7, 16.0, 14.3, 14.7, 17.3, 14.3, 14.5, 15.0, 14.5, 14.7, 16.1, 15.9, 12.9, 13.1, 16.0, 13.7, 14.5, 15.9, 15.1, 12.6, 17.0, 15.2, 15.1, 14.5, 15.1, 15.7, 15.5, 14.9, 16.0, 14.7, 16.7, 17.9, 15.2, 16.2, 16.8, 17.4, 16.4, 15.3, 16.4, 16.2, 14.5, 15.4, 15.7], [16.9, 17.2, 17.0, 14.2, 17.9, 16.6, 17.6, 16.8, 19.2, 15.3, 15.2, 14.5, 16.5, 16.9, 14.7, 15.5, 18.1, 16.1, 17.5, 15.4, 17.0, 17.2, 17.1, 14.7, 17.6, 18.8, 16.1, 15.0, 15.0, 15.3, 16.3, 18.6, 19.1, 15.0, 16.5, 16.2, 16.3, 16.0, 17.8, 16.1, 18.8, 18.2, 15.7, 21.3, 20.0, 16.1, 17.3, 15.9, 18.8, 15.2, 18.3, 17.4, 18.5, 16.5, 17.6, 22.2, 16.9, 18.0, 17.8, 20.4, 15.8, 16.9, 18.8, 19.5], [17.1, 17.3, 16.7, 16.0, 18.1, 14.0, 15.6, 17.7, 18.0, 15.5, 15.8, 15.2, 15.3, 16.1, 15.2, 15.8, 16.3, 16.8, 16.8, 16.5, 17.1, 15.1, 17.6, 16.4, 19.5, 17.0, 15.8, 14.7, 15.1, 16.6, 16.4, 16.9, 17.4, 16.8, 15.0, 15.1, 15.5, 16.6, 17.1, 18.2, 17.3, 18.0, 14.6, 17.4, 18.7, 17.5, 20.1, 16.0, 17.2, 16.9, 18.3, 18.6, 19.3, 18.8, 15.7, 15.9, 16.8, 17.3, 18.2, 16.4, 16.8, 18.4, 17.9, 15.7], [15.5, 11.1, 14.0, 13.8, 14.6, 14.6, 12.4, 15.7, 15.6, 13.3, 17.2, 12.7, 13.7, 14.2, 13.1, 13.4, 14.1, 14.2, 13.7, 13.6, 12.5, 10.8, 14.5, 12.9, 14.8, 13.4, 12.6, 13.6, 12.5, 14.6, 14.8, 16.0, 13.4, 12.4, 13.2, 10.5, 14.5, 13.9, 15.4, 12.2, 14.7, 14.3, 12.5, 13.3, 13.6, 11.5, 13.4, 14.4, 17.7, 15.0, 12.8, 13.9, 13.9, 14.9, 15.2, 17.7, 13.3, 13.1, 14.4, 12.6, 15.2, 13.4, 13.8, 15.3], [8.5, 8.0, 11.5, 11.6, 9.2, 9.4, 10.7, 10.9, 11.1, 10.7, 11.4, 10.4, 9.1, 7.8, 9.8, 11.1, 11.6, 11.1, 11.5, 9.9, 9.7, 8.2, 8.3, 6.4, 7.7, 10.7, 11.4, 11.0, 9.6, 8.7, 8.5, 11.2, 9.4, 10.9, 9.7, 10.9, 10.4, 10.4, 12.2, 11.9, 9.4, 7.3, 8.6, 8.6, 12.4, 9.9, 8.9, 9.0, 10.1, 11.1, 14.0, 8.6, 6.6, 11.0, 12.9, 13.6, 9.3, 9.7, 9.3, 9.5, 10.6, 9.6, 11.8, 13.2], [8.2, 2.3, 7.1, 6.5, 5.8, 4.6, 6.0, 5.4, 5.2, 7.3, 4.5, 3.9, 8.1, 5.8, 1.9, 3.8, 4.7, 5.0, 6.0, 7.2, 4.6, 5.3, 4.9, 6.2, 4.5, 6.1, 6.1, 6.6, 4.5, 4.2, 6.0, 7.6, 5.4, 7.3, 1.7, 7.7, 6.1, 5.3, 5.0, 5.4, 5.0, 7.4, 1.5, 8.7, 5.5, 5.2, 5.7, 2.9, 5.9, 7.7, 6.1, 7.1, 7.8, 5.4, 6.1, 8.8, 6.1, 6.2, 9.4, 5.2, 6.0, 6.4, 5.9, 8.0], [4.4, 1.0, 4.8, 5.1, 4.2, 4.9, 2.4, 4.4, 3.9, 2.6, 0.8, -1.4, -1.5, 2.0, 3.8, 3.6, 2.5, -0.7, -2.5, 1.8, 5.0, 3.2, 2.3, 6.6, 2.3, 0.7, 4.2, 1.3, 4.6, 2.9, -1.0, 3.1, 2.7, 3.5, 5.2, 4.1, 3.8, 5.5, 4.4, 3.5, 3.2, 3.3, 4.4, 4.8, -1.6, -0.6, 4.1, 3.5, 4.1, 4.6, 2.1, 1.6, 3.3, 2.7, 3.3, 6.2, 3.1, 1.8, 1.7, -2.7, 5.5, 4.1, 5.5, 4.1], [9.7, 8.6, 9.8, 8.8, 8.6, 7.9, 9.7, 9.3, 10.2, 9.4, 9.7, 7.8, 7.6, 8.9, 8.3, 9.2, 9.7, 8.8, 8.5, 8.5, 9.1, 8.5, 9.0, 9.3, 9.3, 9.2, 9.3, 8.7, 7.8, 8.5, 9.1, 9.7, 9.6, 8.6, 7.8, 8.5, 8.3, 9.9, 10.4, 10.4, 9.1, 10.2, 9.0, 10.1, 9.8, 7.8, 9.7, 9.8, 10.5, 10.5, 9.9, 10.3, 9.9, 9.9, 10.1, 10.8, 10.7, 10.1, 10.0, 8.5, 10.3, 9.8, 9.4, 11.3]];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "total"];



var Twente = flexx.classes.Twente = function () {
    _pyfunc_op_instantiate(this, arguments);
}
Twente.prototype = Object.create(flexx.classes.Widget.prototype);
Twente.prototype._base_class = flexx.classes.Widget.prototype;
Twente.prototype._class_name = "Twente";

Twente.prototype.__emitters__ = ["key_down", "key_press", "key_up", "mouse_down", "mouse_move", "mouse_up", "mouse_wheel"];
Twente.prototype.__handlers__ = ["_Widget__children_changed", "_Widget__container_changed", "_Widget__css_class_changed", "_Widget__icon_changed", "_Widget__make_singleton_container_widgets_work", "_Widget__style_changed", "_Widget__title_changed", "_Widget__update_tabindex", "_update_plot", "check_size"];
Twente.prototype.__local_properties__ = ["parent", "size"];
Twente.prototype.__properties__ = ["base_size", "children", "container", "css_class", "flex", "icon", "parent", "pos", "size", "style", "tabindex", "title"];

Twente.prototype._update_plot = function () {
    var events, i, j, month, n, sm2, smoothing, val, yy1, yy2;
    events = Array.prototype.slice.call(arguments);
    month = this.month.value;
    smoothing = this.smoothing.value;
    this.month_label.text = "Month (" + months[month] + ")";
    this.smoothing_label.txt = "Smoothing (" + smoothing + ")";
    yy1 = data[month];
    yy2 = [];
    sm2 = _pyfunc_int((smoothing / 2));
    for (i = 0; i < yy1.length; i += 1) {
        val = 0;
        n = 0;
        for (j = Math.max(0, (i - sm2)); j < Math.min(yy1.length, (_pyfunc_op_add(i, sm2) + 1)); j += 1) {
            val=_pyfunc_op_add(val, yy1[j])
            n=_pyfunc_op_add(n, 1)
        }
        if (_pyfunc_op_equals(n, 0)) {
            _pymeth_append.call(yy2, yy1[i]);
        } else {
            _pymeth_append.call(yy2, (val / n));
        }
    }
    this.plot.ydata = yy2;
    return null;
};
Twente.prototype._update_plot.nobind = true;
Twente.prototype._update_plot._connection_strings = ["month.value", "smoothing.value"];

Twente.prototype.init = function () {
    flexx.classes.Widget.prototype.init.call(this);
    this._update_plot();
    return null;
};



return {Twente: Twente, data: data, months: months};
});