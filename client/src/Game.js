//this component renders the scores

var React = require('react');
var Quarters = require('./Quarters');
var QuarterScores = require('./QuarterScores');
var GameInfo = require('./GameInfo');

function Game(games){
  return(
    <div>
        {games.gameInfo.map(event => {
          return(
						<div key={event.game.ID}>
	            <table>
		            <Quarters quarter={event.quarterSummary} />
		            <QuarterScores game={event} />
			        </table>
							<GameInfo game={event} />
						</div>
          )
        })}
    </div>
  )
}

module.exports = Game;
