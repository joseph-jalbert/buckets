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

function Game(games){
  console.log(games.gameInfo);
  return(
    <div>
        {games.gameInfo.map(event => {
          return(
            <table key={event.game.ID}>
            <thead>
              <tr>
                <th></th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                {event.quarterSummary && event.quarterSummary.quarter[4] ? <th>OT 1</th> : ''}
                {event.quarterSummary && event.quarterSummary.quarter[5] ? <th>OT 1</th> : ''}
                {event.quarterSummary && event.quarterSummary.quarter[6] ? <th>OT 1</th> : ''}
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="away">
                <td>
                  <div>{event.game.awayTeam.Name}</div>
                </td>
                <th>{event.quarterSummary && event.quarterSummary.quarter[0].awayScore ? event.quarterSummary.quarter[0].awayScore : '' }</th>
                <th>{event.quarterSummary && event.quarterSummary.quarter[1] && event.quarterSummary.quarter[1].awayScore ? event.quarterSummary.quarter[1].awayScore : '' }</th>
                <th>{event.quarterSummary && event.quarterSummary.quarter[2].awayScore ? event.quarterSummary.quarter[2].awayScore : '' }</th>
                <th>{event.quarterSummary && event.quarterSummary.quarter[3] && event.quarterSummary.quarter[3].awayScore ? event.quarterSummary.quarter[3].awayScore : '' }</th>
                {event.quarterSummary && event.quarterSummary.quarter[4] ? <th>{event.quarterSummary.quarter[4].awayScore}</th> : '' }
                {event.quarterSummary && event.quarterSummary.quarter[5] ? <th>{event.quarterSummary.quarter[5].awayScore}</th> : '' }
                {event.quarterSummary && event.quarterSummary.quarter[6] ? <th>{event.quarterSummary.quarter[6].awayScore}</th> : '' }
                <th>{event.awayScore ? event.awayScore : '' }</th>
              </tr>
              <tr className="home">
                <td>
                  <div>{event.game.homeTeam.Name}</div>
                </td>
                <th>{event.quarterSummary && event.quarterSummary.quarter[0].homeScore ? event.quarterSummary.quarter[0].homeScore : '' }</th>
                <th>{event.quarterSummary && event.quarterSummary.quarter[1].homeScore ? event.quarterSummary.quarter[1].homeScore : '' }</th>
                <th>{event.quarterSummary && event.quarterSummary.quarter[2].homeScore ? event.quarterSummary.quarter[2].homeScore : '' }</th>
                <th>{event.quarterSummary && event.quarterSummary.quarter[3] && event.quarterSummary.quarter[3].homeScore ? event.quarterSummary.quarter[3].homeScore : '' }</th>
                {event.quarterSummary && event.quarterSummary.quarter[4] ? <th>{event.quarterSummary.quarter[4].homeScore}</th> : '' }
                {event.quarterSummary && event.quarterSummary.quarter[5] ? <th>{event.quarterSummary.quarter[5].homeScore}</th> : '' }
                {event.quarterSummary && event.quarterSummary.quarter[6] ? <th>{event.quarterSummary.quarter[6].homeScore}</th> : '' }
                <th>{event.homeScore ? event.homeScore : '' }</th>
              </tr>
            </tbody>
          </table>
          )
        })}
    </div>
  )
}


export default App;
