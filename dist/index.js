!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.NavCard=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/index.js":[function(require,module,exports){
/* @jsx React.DOM */
var React = require('react');
var NavCard = require('./NavCard');

React.render(
    React.createElement(NavCard, null, 
        React.createElement("div", null, React.createElement("h1", null, "Hello, world1!")), 
        React.createElement("div", null, React.createElement("h1", null, "Hello, world2!"))
    ),
    document.getElementById('example')
);


},{"./NavCard":"/Users/zmm/person/NavCard/src/NavCard.js","react":false}],"/Users/zmm/person/NavCard/src/NavCard.js":[function(require,module,exports){
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


},{}]},{},["./src/index.js"])("./src/index.js")
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvem1tL3BlcnNvbi9OYXZDYXJkL3NyYy9pbmRleC5qcyIsIi9Vc2Vycy96bW0vcGVyc29uL05hdkNhcmQvc3JjL05hdkNhcmQuanMiLCIvVXNlcnMvem1tL3BlcnNvbi9OYXZDYXJkL3NyYy9saWIvTmF2Q2FyZEl0ZW0uanMiLCIvVXNlcnMvem1tL3BlcnNvbi9OYXZDYXJkL3NyYy9saWIvTmF2Q2FyZFN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsb0JBQW9CO0FBQ3BCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRW5DLEtBQUssQ0FBQyxNQUFNO0lBQ1Isb0JBQUMsT0FBTyxFQUFBLElBQUMsRUFBQTtRQUNMLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUEsb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQSxnQkFBbUIsQ0FBTSxDQUFBLEVBQUE7UUFDbEMsb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQSxvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFBLGdCQUFtQixDQUFNLENBQUE7SUFDNUIsQ0FBQTtJQUNWLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO0NBQ3JDLENBQUM7Ozs7QUNWRixvQkFBb0I7QUFDcEIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2pELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQy9DLElBQUksNkJBQTZCLHVCQUFBO0lBQzdCLGVBQWUsRUFBRSxXQUFXO1FBQ3hCLE9BQU87WUFDSCxTQUFTLEVBQUUsU0FBUztZQUNwQixZQUFZLEVBQUUsQ0FBQztTQUNsQixDQUFDO0tBQ0w7SUFDRCxnQkFBZ0IsRUFBRSxZQUFZO0tBQzdCO0lBQ0QsTUFBTSxFQUFFLFlBQVk7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFFBQVEsb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxLQUFBLEVBQUssQ0FBRSxZQUFZLENBQUMsSUFBSSxFQUFDLENBQUMsU0FBQSxFQUFTLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFXLENBQUEsRUFBQTtZQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFO2dCQUM3QyxPQUFPLG9CQUFDLFdBQVcsRUFBQSxDQUFBLENBQUMsR0FBQSxFQUFHLENBQUUsS0FBSyxFQUFDLENBQUMsSUFBQSxFQUFJLENBQUUsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBYyxDQUFBLEVBQUMsS0FBb0IsQ0FBQSxDQUFDO2FBQ2xHLENBQUU7UUFDRCxDQUFBLEVBQUU7S0FDWDtBQUNMLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7OztBQ3ZCekIsb0JBQW9CO0FBQ3BCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM3QyxJQUFJLGlDQUFpQywyQkFBQTtJQUNqQyxlQUFlLEVBQUUsV0FBVztRQUN4QixPQUFPO1lBQ0gsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDO0tBQ0w7SUFDRCxnQkFBZ0IsRUFBRSxZQUFZO0tBQzdCO0lBQ0QsTUFBTSxFQUFFLFlBQVk7UUFDaEIsUUFBUSxvQkFBQSxLQUFJLEVBQUEsQ0FBQTtZQUNSLEtBQUEsRUFBSyxDQUFFLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUM7WUFDOUMsUUFBQSxFQUFRLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUM7WUFDeEMsV0FBQSxFQUFXLENBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQztZQUM5QyxVQUFBLEVBQVUsQ0FBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7UUFDL0MsQ0FBQSxFQUFBO1FBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTO1FBQ2YsQ0FBQSxFQUFFO0tBQ1g7QUFDTCxJQUFJLGFBQWEsRUFBRSxZQUFZOztLQUUxQjtBQUNMLElBQUksZ0JBQWdCLEVBQUUsWUFBWTs7S0FFN0I7QUFDTCxJQUFJLGVBQWUsRUFBRSxZQUFZOztLQUU1QjtBQUNMLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDOzs7O0FDaEM3QixNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2IsSUFBSSxFQUFFO1FBQ0YsVUFBVSxFQUFFLFVBQVU7UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQztRQUNULFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7UUFDVixpQkFBaUIsRUFBRSxlQUFlO1FBQ2xDLGFBQWEsRUFBRSxlQUFlO1FBQzlCLFdBQVcsRUFBRSxlQUFlO0tBQy9CO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsU0FBUyxFQUFFLEdBQUc7S0FDakI7Q0FDSixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIE5hdkNhcmQgPSByZXF1aXJlKCcuL05hdkNhcmQnKTtcblxuUmVhY3QucmVuZGVyKFxuICAgIDxOYXZDYXJkPlxuICAgICAgICA8ZGl2PjxoMT5IZWxsbywgd29ybGQxITwvaDE+PC9kaXY+XG4gICAgICAgIDxkaXY+PGgxPkhlbGxvLCB3b3JsZDIhPC9oMT48L2Rpdj5cbiAgICA8L05hdkNhcmQ+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcbik7XG4iLCIvKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBOYXZDYXJkU3R5bGUgPSByZXF1aXJlKCcuL2xpYi9OYXZDYXJkU3R5bGUnKTtcbnZhciBOYXZDYXJkSXRlbSA9IHJlcXVpcmUoJy4vbGliL05hdkNhcmRJdGVtJyk7XG52YXIgTmF2Q2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NIb29rOiAnbmF2Y2FyZCcsXG4gICAgICAgICAgICBkZWZhdWx0SW5kZXg6IDBcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldEluaXRpYWxTdGF0ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoPGRpdiBzdHlsZT17TmF2Q2FyZFN0eWxlLmJhc2V9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc0hvb2t9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPE5hdkNhcmRJdGVtIGtleT17aW5kZXh9IHNob3c9e2luZGV4ID09PSB0aGF0LnByb3BzLmRlZmF1bHRJbmRleH0+e2NoaWxkfTwvTmF2Q2FyZEl0ZW0+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2Q2FyZDtcblxuIiwiLyogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTmF2Q2FyZFN0eWxlID0gcmVxdWlyZSgnLi9OYXZDYXJkU3R5bGUnKTtcbnZhciBOYXZDYXJkSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5pdGlhbFN0YXRlczogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdlxuICAgICAgICAgICAgc3R5bGU9e1tOYXZDYXJkU3R5bGUuYmFzZSwgTmF2Q2FyZFN0eWxlLmhpZGVdfVxuICAgICAgICAgICAgb25TY3JvbGw9e3RoaXMuX2hhbmRsZVNjcm9sbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Ub3VjaE1vdmU9e3RoaXMuX2hhbmRsZVRvdWNoTW92ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5faGFuZGxlVG91Y2hFbmQuYmluZCh0aGlzKX1cbiAgICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9LFxuICAgIF9oYW5kbGVTY3JvbGw6IGZ1bmN0aW9uICgpIHtcblxuICAgIH0sXG4gICAgX2hhbmRsZVRvdWNoTW92ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcbiAgICBfaGFuZGxlVG91Y2hFbmQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdkNhcmRJdGVtO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYmFzZToge1xuICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgICAndG9wJzogMCxcbiAgICAgICAgJ2xlZnQnOiAwLFxuICAgICAgICAnYm90dG9tJzogMCxcbiAgICAgICAgJ3JpZ2h0JzogMCxcbiAgICAgICAgJ1dlYmtpdFRyYW5zZm9ybSc6ICd0cmFuc2xhdGVaKDApJyxcbiAgICAgICAgJ21zVHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVooMCknLFxuICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVooMCknXG4gICAgfSxcbiAgICBoaWRlOiB7XG4gICAgICAgICdvcGFjaXR5JzogJzAnXG4gICAgfVxufTtcbiJdfQ==
