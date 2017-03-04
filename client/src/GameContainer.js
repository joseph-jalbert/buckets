// this component parses the JSON and does business logic
var React = require('react');
var Game = require('./Game');


var GameContainer = React.createClass({
	render: function() {
    return <Game gameInfo={this.props.scoreboard}f/>
  }
});

module.exports = GameContainer;
