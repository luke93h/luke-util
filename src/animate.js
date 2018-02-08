function animate(dom, options, time, fn) {
    time = time || 500
    var ease = Math.sqrt
    var start = (new Date()).getTime()
    var initValus = {}
    var unit = '', units
    for (attr in options) {
        initValus[attr] = getStyle(dom, attr)
    }
    proress()
    function proress() {
        var elapsed = (new Date()).getTime() - start
        var fraction = elapsed / time
        if (fraction < 1) {
            for (attr in options) {
                if (attr == 'opacity') {
                    unit = ''
                } else {
                    units = options[attr].match(/[^\d+-.]+/)
                    unit = (units && units[0]) || 'px'
                }
                dom.style[attr] = parseFloat(initValus[attr]) + (parseFloat(options[attr]) - parseFloat(initValus[attr])) * fraction + unit
            }
            setTimeout(proress, Math.min(1, time - elapsed))
        } else {

            for (attr in options) {
                dom.style[attr] = options[attr]
                if (fn) {
                    fn()
                }
            }
        }
    }
    function getStyle(dom, attr) {
        if (dom.currentStyle) {
            return dom.currentStyle[attr];    //针对ie
        } else {
            return document.defaultView.getComputedStyle(dom, null)[attr];
        }
    }
}
export default animate