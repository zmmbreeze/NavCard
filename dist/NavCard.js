!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.NavCard=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/NavCard.js":[function(require,module,exports){
/* @jsx React.DOM */
var React = require('react');
var NavCardStyle = require('./lib/NavCardStyle');
var NavCardItem = require('./lib/NavCardItem');
var NavCard = React.createClass({displayName: "NavCard",
    getDefaultProps: function() {
        return {
            classHook: 'navcard',
            defaultIndex: 0
        };
    },
    getInitialStates: function () {
    },
    render: function () {
        var that = this;
        return (React.createElement("div", {style: NavCardStyle.base, className: this.props.classHook}, 
            this.props.children.map(function (child, index) {
                return React.createElement(NavCardItem, {key: index, show: index === that.props.defaultIndex}, child);
            })
        ));
    }
});

module.exports = NavCard;



},{"./lib/NavCardItem":"/Users/zmm/person/NavCard/src/lib/NavCardItem.js","./lib/NavCardStyle":"/Users/zmm/person/NavCard/src/lib/NavCardStyle.js","react":false}],"/Users/zmm/person/NavCard/src/lib/NavCardItem.js":[function(require,module,exports){
/* @jsx React.DOM */
var React = require('react');
var NavCardStyle = require('./NavCardStyle');
var NavCardItem = React.createClass({displayName: "NavCardItem",
    getDefaultProps: function() {
        return {
            show: true
        };
    },
    getInitialStates: function () {
    },
    render: function () {
        return (React.createElement("div", {
            style: [NavCardStyle.base, NavCardStyle.hide], 
            onScroll: this._handleScroll.bind(this), 
            onTouchMove: this._handleTouchMove.bind(this), 
            onTouchEnd: this._handleTouchEnd.bind(this)
        }, 
        this.props.children
        ));
    },
    _handleScroll: function () {

    },
    _handleTouchMove: function () {

    },
    _handleTouchEnd: function () {

    }
});

module.exports = NavCardItem;


},{"./NavCardStyle":"/Users/zmm/person/NavCard/src/lib/NavCardStyle.js","react":false}],"/Users/zmm/person/NavCard/src/lib/NavCardStyle.js":[function(require,module,exports){
module.exports = {
    base: {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'bottom': 0,
        'right': 0,
        'WebkitTransform': 'translateZ(0)',
        'msTransform': 'translateZ(0)',
        'transform': 'translateZ(0)'
    },
    hide: {
        'opacity': '0'
    }
};


},{}]},{},["./src/NavCard.js"])("./src/NavCard.js")
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvem1tL3BlcnNvbi9OYXZDYXJkL3NyYy9OYXZDYXJkLmpzIiwiL1VzZXJzL3ptbS9wZXJzb24vTmF2Q2FyZC9zcmMvbGliL05hdkNhcmRJdGVtLmpzIiwiL1VzZXJzL3ptbS9wZXJzb24vTmF2Q2FyZC9zcmMvbGliL05hdkNhcmRTdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLG9CQUFvQjtBQUNwQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDakQsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDL0MsSUFBSSw2QkFBNkIsdUJBQUE7SUFDN0IsZUFBZSxFQUFFLFdBQVc7UUFDeEIsT0FBTztZQUNILFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFlBQVksRUFBRSxDQUFDO1NBQ2xCLENBQUM7S0FDTDtJQUNELGdCQUFnQixFQUFFLFlBQVk7S0FDN0I7SUFDRCxNQUFNLEVBQUUsWUFBWTtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsUUFBUSxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxTQUFBLEVBQVMsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVcsQ0FBQSxFQUFBO1lBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUssRUFBRSxLQUFLLEVBQUU7Z0JBQzdDLE9BQU8sb0JBQUMsV0FBVyxFQUFBLENBQUEsQ0FBQyxHQUFBLEVBQUcsQ0FBRSxLQUFLLEVBQUMsQ0FBQyxJQUFBLEVBQUksQ0FBRSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFjLENBQUEsRUFBQyxLQUFvQixDQUFBLENBQUM7YUFDbEcsQ0FBRTtRQUNELENBQUEsRUFBRTtLQUNYO0FBQ0wsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Ozs7O0FDdkJ6QixvQkFBb0I7QUFDcEIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzdDLElBQUksaUNBQWlDLDJCQUFBO0lBQ2pDLGVBQWUsRUFBRSxXQUFXO1FBQ3hCLE9BQU87WUFDSCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7S0FDTDtJQUNELGdCQUFnQixFQUFFLFlBQVk7S0FDN0I7SUFDRCxNQUFNLEVBQUUsWUFBWTtRQUNoQixRQUFRLG9CQUFBLEtBQUksRUFBQSxDQUFBO1lBQ1IsS0FBQSxFQUFLLENBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQztZQUM5QyxRQUFBLEVBQVEsQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQztZQUN4QyxXQUFBLEVBQVcsQ0FBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQzlDLFVBQUEsRUFBVSxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtRQUMvQyxDQUFBLEVBQUE7UUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVM7UUFDZixDQUFBLEVBQUU7S0FDWDtBQUNMLElBQUksYUFBYSxFQUFFLFlBQVk7O0tBRTFCO0FBQ0wsSUFBSSxnQkFBZ0IsRUFBRSxZQUFZOztLQUU3QjtBQUNMLElBQUksZUFBZSxFQUFFLFlBQVk7O0tBRTVCO0FBQ0wsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7Ozs7QUNoQzdCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDYixJQUFJLEVBQUU7UUFDRixVQUFVLEVBQUUsVUFBVTtRQUN0QixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDO1FBQ1QsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztRQUNWLGlCQUFpQixFQUFFLGVBQWU7UUFDbEMsYUFBYSxFQUFFLGVBQWU7UUFDOUIsV0FBVyxFQUFFLGVBQWU7S0FDL0I7SUFDRCxJQUFJLEVBQUU7UUFDRixTQUFTLEVBQUUsR0FBRztLQUNqQjtDQUNKLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTmF2Q2FyZFN0eWxlID0gcmVxdWlyZSgnLi9saWIvTmF2Q2FyZFN0eWxlJyk7XG52YXIgTmF2Q2FyZEl0ZW0gPSByZXF1aXJlKCcuL2xpYi9OYXZDYXJkSXRlbScpO1xudmFyIE5hdkNhcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzSG9vazogJ25hdmNhcmQnLFxuICAgICAgICAgICAgZGVmYXVsdEluZGV4OiAwXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRJbml0aWFsU3RhdGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKDxkaXYgc3R5bGU9e05hdkNhcmRTdHlsZS5iYXNlfSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NIb29rfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxOYXZDYXJkSXRlbSBrZXk9e2luZGV4fSBzaG93PXtpbmRleCA9PT0gdGhhdC5wcm9wcy5kZWZhdWx0SW5kZXh9PntjaGlsZH08L05hdkNhcmRJdGVtPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdkNhcmQ7XG5cbiIsIi8qIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIE5hdkNhcmRTdHlsZSA9IHJlcXVpcmUoJy4vTmF2Q2FyZFN0eWxlJyk7XG52YXIgTmF2Q2FyZEl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldEluaXRpYWxTdGF0ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXtbTmF2Q2FyZFN0eWxlLmJhc2UsIE5hdkNhcmRTdHlsZS5oaWRlXX1cbiAgICAgICAgICAgIG9uU2Nyb2xsPXt0aGlzLl9oYW5kbGVTY3JvbGwuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlPXt0aGlzLl9oYW5kbGVUb3VjaE1vdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuX2hhbmRsZVRvdWNoRW5kLmJpbmQodGhpcyl9XG4gICAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfSxcbiAgICBfaGFuZGxlU2Nyb2xsOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9LFxuICAgIF9oYW5kbGVUb3VjaE1vdmU6IGZ1bmN0aW9uICgpIHtcblxuICAgIH0sXG4gICAgX2hhbmRsZVRvdWNoRW5kOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOYXZDYXJkSXRlbTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGJhc2U6IHtcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICAgJ3RvcCc6IDAsXG4gICAgICAgICdsZWZ0JzogMCxcbiAgICAgICAgJ2JvdHRvbSc6IDAsXG4gICAgICAgICdyaWdodCc6IDAsXG4gICAgICAgICdXZWJraXRUcmFuc2Zvcm0nOiAndHJhbnNsYXRlWigwKScsXG4gICAgICAgICdtc1RyYW5zZm9ybSc6ICd0cmFuc2xhdGVaKDApJyxcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVaKDApJ1xuICAgIH0sXG4gICAgaGlkZToge1xuICAgICAgICAnb3BhY2l0eSc6ICcwJ1xuICAgIH1cbn07XG4iXX0=
