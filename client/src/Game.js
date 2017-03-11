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
						<div className="col-xs-8 col-sm-6 col-lg-4" key={event.game.ID}>
	            <table className="table">
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
