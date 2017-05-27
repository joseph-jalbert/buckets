var React = require('react');
var Game = require('./Game');


var GameContainer = React.createClass({
	render: function() {
    return <Game gameInfo={this.props.scoreboard}/>
  }
});

module.exports = GameContainer;
