//this component renders the scores

import React, { Component } from 'react';
// import Scoreboard from './Scoreboard.js';

class Game extends Component {
	render() {
		return (
		  <div>
		    <ul>
		    {this.state.scoreboard.map(event => {
		      return(
		          <table>
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
		      )})
		    }
		    </ul>
		  </div>
		);
}
