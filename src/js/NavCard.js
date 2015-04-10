/* @jsx React.DOM */
var NavCardStyle = require('./lib/NavCardStyle');
var NavCardItem = require('./lib/NavCardItem');
var NavCard = React.createClass({
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
        return (<div style={NavCardStyle.base} className={this.props.classHook}>
            {this.props.children.map(function (child, index) {
                return <NavCardItem key={index} show={index === that.props.defaultIndex}>{child}</NavCardItem>;
            })}
        </div>);
    }
});

module.exports = NavCard;

