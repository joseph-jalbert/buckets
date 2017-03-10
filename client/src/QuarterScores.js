var React = require('react');
var Logo = require('./Logo');

function QuarterScores(game) {
  var event = game.game;
  return(
    <tbody>
      <tr className="away">
        <td>
          <Logo name={event.game.awayTeam.Name}/><b>{event.game.awayTeam.Name}</b>
        </td>
        <th>{(event.quarterSummary && event.quarterSummary.quarter[0] && event.quarterSummary.quarter[0].awayScore) && event.quarterSummary.quarter[0].awayScore}</th>
        <th>{(event.quarterSummary && event.quarterSummary.quarter[1] && event.quarterSummary.quarter[1].awayScore) && event.quarterSummary.quarter[1].awayScore}</th>
        <th>{(event.quarterSummary && event.quarterSummary.quarter[2] && event.quarterSummary.quarter[2].awayScore) && event.quarterSummary.quarter[2].awayScore}</th>
        <th>{(event.quarterSummary && event.quarterSummary.quarter[3] && event.quarterSummary.quarter[3].awayScore) && event.quarterSummary.quarter[3].awayScore}</th>
        {(event.quarterSummary && event.quarterSummary.quarter[4]) && <th>{event.quarterSummary.quarter[4].awayScore}</th>}
        {(event.quarterSummary && event.quarterSummary.quarter[5]) && <th>{event.quarterSummary.quarter[5].awayScore}</th>}
        {(event.quarterSummary && event.quarterSummary.quarter[6]) && <th>{event.quarterSummary.quarter[6].awayScore}</th>}
        <th>{event.awayScore && event.awayScore}</th>
      </tr>
      <tr className="home">
        <td>
          <Logo name={event.game.homeTeam.Name}/><b>{event.game.homeTeam.Name}</b>
        </td>
        <th>{(event.quarterSummary && event.quarterSummary.quarter[0] && event.quarterSummary.quarter[0].homeScore) && event.quarterSummary.quarter[0].homeScore}</th>
        <th>{(event.quarterSummary && event.quarterSummary.quarter[1] && event.quarterSummary.quarter[1].homeScore) && event.quarterSummary.quarter[1].homeScore}</th>
        <th>{(event.quarterSummary && event.quarterSummary.quarter[2] && event.quarterSummary.quarter[2].homeScore) && event.quarterSummary.quarter[2].homeScore}</th>
        <th>{(event.quarterSummary && event.quarterSummary.quarter[3] && event.quarterSummary.quarter[3].homeScore) && event.quarterSummary.quarter[3].homeScore}</th>
        {(event.quarterSummary && event.quarterSummary.quarter[4]) && <th>{event.quarterSummary.quarter[4].homeScore}</th>}
        {(event.quarterSummary && event.quarterSummary.quarter[5]) && <th>{event.quarterSummary.quarter[5].homeScore}</th>}
        {(event.quarterSummary && event.quarterSummary.quarter[6]) && <th>{event.quarterSummary.quarter[6].homeScore}</th>}
        <th>{event.homeScore && event.homeScore}</th>
      </tr>
    </tbody>
  )
}

module.exports = QuarterScores;
