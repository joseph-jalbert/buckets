//this component renders the scores

var React = require('react');
var Quarters = require('./Quarters');
var QuarterScores = require('./QuarterScores');
var GameInfo = require('./GameInfo');

function Game(games){
  return(
    <div className="container">
        {games.gameInfo.map(event => {
          return(
						<div className="col-xs-12 col-sm-4 col-md-6" key={event.game.ID}>
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
