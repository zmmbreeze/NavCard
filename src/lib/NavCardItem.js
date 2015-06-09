/* @jsx React.DOM */
var React = require('react');
var NavCardStyle = require('./NavCardStyle');
var util = require('./util');
var NavCardItem = React.createClass({
    getDefaultProps: function() {
        return {
            show: true
        };
    },
    getInitialStates: function () {
    },
    render: function () {
        var styles = NavCardStyle.base;
        if (!this.props.show) {
            styles = util.mergeStyle(styles, NavCardStyle.hide);
        }

        return (<div ref="root" style={styles}>{this.props.children}</div>);
    },
    setX: function (x) {
        var root = React.findDOMNode(this.refs.root);
        root.style.transform = 'translate3d(' + x + 'px, 0, 0)';
    },
    setY: function (y) {
        var root = React.findDOMNode(this.refs.root);
        root.style.transform = 'translate3d(0, ' + x + 'px, 0)';
    }
});

module.exports = NavCardItem;
