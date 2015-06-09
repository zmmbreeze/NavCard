/**
 * Effect class
 * @constructor
 * @param {NavCard} nv
 */
var Effect = function (nv) {
    this.nv = nv;

    this.isHorizontal = this.nv.props.direction === 'horizontal';

    this.startPos = {};

};

Effect.prototype.scroll = function (e) {};

Effect.prototype.start = function (e) {
    if (e.touches && e.touches.length > 1) {
        return;
    }

    var targetTouch = e.targetTouches[0]
    this.startPos = targetTouch[this.isHorizontal ? 'clientX' : 'clientY'];
};

Effect.prototype.move = function (e) {
    e.preventDefault();

    if (e.touches && e.touches.length > 1) {
        return;
    }

    var targetTouch = e.targetTouches[0];
    var curPos = targetTouch[this.isHorizontal ? 'clientX' : 'clientY'];
    console.log(curPos);
    this.nv.setX(curPos);
};

Effect.prototype.end = function (e) {};

module.exports = Effect;
