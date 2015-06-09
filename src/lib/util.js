var util = {
    mergeStyle: function (styleA, styleB) {
        var result = {};
        var style;
        var args = arguments;
        for (var i = 0, l = args.length; i < l; i++) {
            style = args[i];
            for (var key in style) {
                if (style.hasOwnProperty(key)) {
                    result[key] = style[key];
                }
            }
        }
        return result;
    }
};

module.exports = util;
