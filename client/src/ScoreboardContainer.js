// this component fetches the JSON

var React = require('react');
// import Game from './Game';

var ScoreboardContainer = React.createClass({
  getInitialState: function() {
    return {scoreboard: []}
  },

  componentDidMount: async function() {
    var response = await fetch('/scores')
    var data  = await response.json()
    var scores  = JSON.parse(data);
    this.setState({scoreboard: scores.scoreboard.gameScore});
    console.log(scores.scoreboard.gameScore);
  },
  render: function() {return null}
  // render: function() {
  // 	return(this.state.scoreboard.map(game => {
  // 		<GameContainer/>
  // 	})
  // }
});

module.exports = ScoreboardContainer;
