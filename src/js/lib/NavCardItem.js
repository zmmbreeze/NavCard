/* @jsx React.DOM */
var React = require('../../deps/react/react');
var NavCardStyle = require('./NavCardStyle');
var NavCardItem = React.createClass({
    getDefaultProps: function() {
        return {
            show: true
        };
    },
    getInitialStates: function () {
    },
    render: function () {
        return (<div
            style={[NavCardStyle.base, NavCardStyle.hide]}
            onScroll={this._handleScroll.bind(this)}
            onTouchMove={this._handleTouchMove.bind(this)}
            onTouchEnd={this._handleTouchEnd.bind(this)}
        >
        {this.props.children}
        </div>);
    },
    _handleScroll: function () {

    },
    _handleTouchMove: function () {

    },
    _handleTouchEnd: function () {

    }
});

module.exports = NavCardItem;
