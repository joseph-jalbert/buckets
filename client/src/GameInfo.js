var React = require('react');

function fmtMSS(s){
  return(s-(s%=60))/60+(9<s?':':':0')+s
}

function GameInfo(game) {
  var event = game.game;
  if(event.isInProgress === "true" && !event.currentIntermission) {
    if(!event.quarterSummary) {
      return(<i className="game-info">{event.game.time} - {event.game.location} </i>)
    } else {
    return(
       <span className="game-info">{fmtMSS(event.currentQuarterSecondsRemaining)} remaining quarter {event.currentQuarter}</span>
     )
   }
 } else if(event.isUnplayed === "true") {
   return(<i className="game-info">{event.game.time} - {event.game.location} </i>)
 } else if(event.currentIntermission && (event.currentIntermission !== "4" || (event.currentIntermission === "4" && event.awayScore === event.homeScore))) {
   return(<span>End of quarter {event.currentIntermission}</span>)
 } else {
    return(<span className="game-info"><b>Final</b></span>)
  }
}


module.exports = GameInfo;
