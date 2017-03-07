var React = require('react');

function GameInfo(game) {
  var event = game.game;
  return(
    <div className="gameInfo">
     {(event.isInProgress === "true" && event.currentIntermission && event.currentIntermission !== "4") ? <span>{event.currentIntermission}</span> : <span>{event.currentQuarterSecondsRemaining} seconds remaining</span>}
      {<i>{event.game.time} - {event.game.location} </i>}
    </div>
  )
}


module.exports = GameInfo;
