/* @jsx React.DOM */
var React = require('react');
var NavCardStyle = require('./lib/NavCardStyle');
var NavCardItem = require('./lib/NavCardItem');
var Effect = require('./lib/Effect');
var NavCard = React.createClass({
    getDefaultProps: function() {
        return {
            classHook: 'navcard',
            direction: 'horizontal',
            defaultIndex: 0
        };
    },
    getInitialStates: function () {
        return {
            index: this.props.defaultIndex
        };
    },
    render: function () {
        var that = this;
        that.effect = new Effect(that);
        return (<div style={NavCardStyle.base} className={that.props.classHook}
            onScroll={that._handleScroll.bind(that)}
            onTouchStart={that._handleTouchStart.bind(that)}
            onTouchMove={that._handleTouchMove.bind(that)}
            onTouchEnd={that._handleTouchEnd.bind(that)}>
            {that.props.children.map(function (child, index) {
                return <NavCardItem
                    key={index}
                    show={index === that.props.defaultIndex}>{child}</NavCardItem>;
            })}
        </div>);
    },
    _handleScroll: function () {

    },
    _handleTouchStart: function (e) {
        this.effect.start(e);
    },
    _handleTouchMove: function (e) {
        this.effect.move(e);
    },
    _handleTouchEnd: function (e) {
        this.effect.end(e);
    },

});

module.exports = NavCard;

