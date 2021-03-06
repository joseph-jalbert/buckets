var React = require('react');
var Logo = require('./Logo');
var TeamUrl = require('./TeamUrl');

function QuarterScores(game) {
  var event = game.game;
  return(
    <tbody>
      <tr className="away">
        <td>
          <Logo name={event.game.awayTeam.Name}/>
          <TeamUrl name={event.game.awayTeam.Name}/>
        </td>
        <td>{(event.quarterSummary && event.quarterSummary.quarter[0] && event.quarterSummary.quarter[0].awayScore) && event.quarterSummary.quarter[0].awayScore}</td>
        <td>{(event.quarterSummary && event.quarterSummary.quarter[1] && event.quarterSummary.quarter[1].awayScore) && event.quarterSummary.quarter[1].awayScore}</td>
        <td>{(event.quarterSummary && event.quarterSummary.quarter[2] && event.quarterSummary.quarter[2].awayScore) && event.quarterSummary.quarter[2].awayScore}</td>
        <td>{(event.quarterSummary && event.quarterSummary.quarter[3] && event.quarterSummary.quarter[3].awayScore) && event.quarterSummary.quarter[3].awayScore}</td>
        {(event.quarterSummary && event.quarterSummary.quarter[4]) && <td>{event.quarterSummary.quarter[4].awayScore}</td>}
        {(event.quarterSummary && event.quarterSummary.quarter[5]) && <td>{event.quarterSummary.quarter[5].awayScore}</td>}
        {(event.quarterSummary && event.quarterSummary.quarter[6]) && <td>{event.quarterSummary.quarter[6].awayScore}</td>}
        <td>{event.awayScore && event.awayScore}</td>
      </tr>
      <tr className="home">
        <td>
          <Logo name={event.game.homeTeam.Name}/>
          <TeamUrl name={event.game.homeTeam.Name}/>
        </td>
        <td>{(event.quarterSummary && event.quarterSummary.quarter[0] && event.quarterSummary.quarter[0].homeScore) && event.quarterSummary.quarter[0].homeScore}</td>
        <td>{(event.quarterSummary && event.quarterSummary.quarter[1] && event.quarterSummary.quarter[1].homeScore) && event.quarterSummary.quarter[1].homeScore}</td>
        <td>{(event.quarterSummary && event.quarterSummary.quarter[2] && event.quarterSummary.quarter[2].homeScore) && event.quarterSummary.quarter[2].homeScore}</td>
        <td>{(event.quarterSummary && event.quarterSummary.quarter[3] && event.quarterSummary.quarter[3].homeScore) && event.quarterSummary.quarter[3].homeScore}</td>
        {(event.quarterSummary && event.quarterSummary.quarter[4]) && <td>{event.quarterSummary.quarter[4].homeScore}</td>}
        {(event.quarterSummary && event.quarterSummary.quarter[5]) && <td>{event.quarterSummary.quarter[5].homeScore}</td>}
        {(event.quarterSummary && event.quarterSummary.quarter[6]) && <td>{event.quarterSummary.quarter[6].homeScore}</td>}
        <td>{event.homeScore && event.homeScore}</td>
      </tr>
    </tbody>
  )
}

module.exports = QuarterScores;
