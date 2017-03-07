var React = require('react');

function fmtMSS(s){
  return(s-(s%=60))/60+(9<s?':':':0')+s
}

function GameInfo(game) {
  var event = game.game;
  if(event.isInProgress === "true" && !event.currentIntermission) {
    if(!event.quarterSummary) {
      return(<i>{event.game.time} - {event.game.location} </i>)
    } else {
    return(
       <span>{fmtMSS(event.currentQuarterSecondsRemaining)} remaining quarter {event.currentQuarter}</span>
     )
   }
 } else if(event.isUnplayed === "true") {
   return(<i>{event.game.time} - {event.game.location} </i>)
 }
  else {
    return(<span>Final</span>)
  }
}


module.exports = GameInfo;
