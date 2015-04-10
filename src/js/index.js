/* @jsx React.DOM */
var React = require('../deps/react/react');
var NavCard = require('./NavCard');

React.render(
    <NavCard>
        <div><h1>Hello, world1!</h1></div>
        <div><h1>Hello, world2!</h1></div>
    </NavCard>,
    document.getElementById('example')
);
