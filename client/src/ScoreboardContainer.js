// this component fetches the JSON

var React = require('react');
var GameContainer = require('./GameContainer');

var ScoreboardContainer = React.createClass({
  getInitialState: function() {
    return {scoreboard: []}
  },

  fetchJSON: async function() {
    var response = await fetch('/scores');
    var data  = await response.json();
    var scores  = JSON.parse(data);
    this.setState({scoreboard: scores.scoreboard.gameScore, dailyStatus: scores.scoreboard.lastUpdatedOn});
  },

  refreshJSON: function() {
    this.fetchJSON();
    setInterval(this.fetchJSON, 60000);
  },

  componentDidMount: function() {
    this.refreshJSON();
  },

  componentWillUnmount: function() {
    clearInterval(this.fetchJSON);
  },

  render: function() {
    if(!this.state.dailyStatus) return(<h3 className="noGames">*** sorry hoops junkies, there are no NBA games today ***</h3>);
  	return(
  		<GameContainer scoreboard={this.state.scoreboard}/>
  	)
  }
});

module.exports = ScoreboardContainer;
