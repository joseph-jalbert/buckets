// this component fetches the JSON

var React = require('react');
var GameContainer = require('./GameContainer');

var ScoreboardContainer = React.createClass({
  getInitialState: function() {
    return {scoreboard: []}
  },

  componentDidMount: async function() {
    var response = await fetch('/scores')
    var data  = await response.json()
    var scores  = JSON.parse(data);
    this.setState({scoreboard: scores.scoreboard.gameScore});
  },
  render: function() {
  	return(
  		<GameContainer scoreboard={this.state.scoreboard}/>
  	)
  }
});

module.exports = ScoreboardContainer;
