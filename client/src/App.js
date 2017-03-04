import React, { Component } from 'react';
// import ScoreboardContainer from './ScoreboardContainer';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <h1>buckets</h1>
        <ScoreboardContainer/>
      </div>
    );
  }
}

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

var GameContainer = React.createClass({
	render: function() {
    return <Game gameInfo={this.props.scoreboard}f/>
  }
});

function Game(game){
  console.log(game.gameInfo[0]);
  return(
    <div>
      {game.gameInfo[0] ? 'away score:' + game.gameInfo[0].awayScore: 'no'}
    </div>
  )
}


export default App;
