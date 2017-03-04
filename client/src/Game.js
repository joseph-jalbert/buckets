//this component renders the scores

var React = require('react');

function Game(games){
  console.log(games.gameInfo);
  return(
    <div>
        {games.gameInfo.map(event => {
          return(
						<div key={event.game.ID}>
	            <table>
		            <thead>
		              <tr>
		                <th></th>
		                <th>1</th>
		                <th>2</th>
		                <th>3</th>
		                <th>4</th>
		                {(event.quarterSummary && event.quarterSummary.quarter[4]) && <th>OT 1</th>}
		                {(event.quarterSummary && event.quarterSummary.quarter[5]) && <th>OT 2</th>}
		                {(event.quarterSummary && event.quarterSummary.quarter[6]) && <th>OT 3</th>}
		                <th></th>
		              </tr>
		            </thead>
		            <tbody>
		              <tr className="away">
		                <td>
		                  <b>{event.game.awayTeam.Name}</b>
		                </td>
		                <th>{(event.quarterSummary && event.quarterSummary.quarter[0].awayScore) && event.quarterSummary.quarter[0].awayScore}</th>
		                <th>{(event.quarterSummary && event.quarterSummary.quarter[1].awayScore) && event.quarterSummary.quarter[1].awayScore}</th>
		                <th>{(event.quarterSummary && event.quarterSummary.quarter[2].awayScore) && event.quarterSummary.quarter[2].awayScore}</th>
		                <th>{(event.quarterSummary && event.quarterSummary.quarter[3].awayScore) && event.quarterSummary.quarter[3].awayScore}</th>
		                {(event.quarterSummary && event.quarterSummary.quarter[4]) && <th>{event.quarterSummary.quarter[4].awayScore}</th>}
		                {(event.quarterSummary && event.quarterSummary.quarter[5]) && <th>{event.quarterSummary.quarter[5].awayScore}</th>}
		                {(event.quarterSummary && event.quarterSummary.quarter[6]) && <th>{event.quarterSummary.quarter[6].awayScore}</th>}
		                <th>{event.awayScore && event.awayScore}</th>
		              </tr>
		              <tr className="home">
		                <td>
		                  <b>{event.game.homeTeam.Name}</b>
		                </td>
		                <th>{(event.quarterSummary && event.quarterSummary.quarter[0].homeScore) && event.quarterSummary.quarter[0].homeScore}</th>
		                <th>{(event.quarterSummary && event.quarterSummary.quarter[1].homeScore) && event.quarterSummary.quarter[1].homeScore}</th>
		                <th>{(event.quarterSummary && event.quarterSummary.quarter[2].homeScore) && event.quarterSummary.quarter[2].homeScore}</th>
		                <th>{(event.quarterSummary && event.quarterSummary.quarter[3].homeScore) && event.quarterSummary.quarter[3].homeScore}</th>
		                {(event.quarterSummary && event.quarterSummary.quarter[4]) && <th>{event.quarterSummary.quarter[4].homeScore}</th>}
		                {(event.quarterSummary && event.quarterSummary.quarter[5]) && <th>{event.quarterSummary.quarter[5].homeScore}</th>}
		                {(event.quarterSummary && event.quarterSummary.quarter[6]) && <th>{event.quarterSummary.quarter[6].homeScore}</th>}
		                <th>{event.homeScore && event.homeScore}</th>
		              </tr>
		            </tbody>
			        </table>
							<div className="gameInfo">
								<i>{event.game.time} - {event.game.location}</i>
							</div>
						</div>
          )
        })}
    </div>
  )
}

module.exports = Game;
