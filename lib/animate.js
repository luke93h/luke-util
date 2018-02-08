'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function animate(obj, options, time, fn) {
    time = time || 500;
    var ease = Math.sqrt;
    var start = new Date().getTime();
    var initValus = {};
    var unit = '',
        units;
    for (attr in options) {
        initValus[attr] = getStyle(obj, attr);
    }
    proress();
    function proress() {
        var elapsed = new Date().getTime() - start;
        var fraction = elapsed / time;
        if (fraction < 1) {
            for (attr in options) {
                if (attr == 'opacity') {
                    unit = '';
                } else {
                    units = options[attr].match(/[^\d+-.]+/);
                    unit = units && units[0] || 'px';
                }
                obj.style[attr] = parseFloat(initValus[attr]) + (parseFloat(options[attr]) - parseFloat(initValus[attr])) * fraction + unit;
            }
            setTimeout(proress, Math.min(1, time - elapsed));
        } else {

            for (attr in options) {
                obj.style[attr] = options[attr];
                if (fn) {
                    fn();
                }
            }
        }
    }
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr]; //针对ie
        } else {
            return document.defaultView.getComputedStyle(obj, null)[attr];
        }
    }
}
exports.default = animate;
module.exports = exports['default'];