var React = require('react');

function Team(team) {
  let teamurl;
  if (team.name === "Hawks") teamurl = "www.nba.com/hawks";
  if (team.name === "Nets") teamurl = "BK";
  if (team.name === "Celtics") teamurl = "BOS";
  if (team.name === "Hornets") teamurl = "CHA";
  if (team.name === "Bulls") teamurl = "CHI";
  if (team.name === "Cavaliers") teamurl = "CLE";
  if (team.name === "Mavericks") teamurl = "DAL";
  if (team.name === "Nuggets") teamurl = "DEN";
  if (team.name === "Pistons") teamurl = "DET";
  if (team.name === "Warriors") teamurl = "GS";
  if (team.name === "Rockets") teamurl = "HOU";
  if (team.name === "Pacers") teamurl = "IND";
  if (team.name === "Clippers") teamurl = "LAC";
  if (team.name === "Lakers") teamurl = "LAL";
  if (team.name === "Grizzlies") teamurl = "MEM";
  if (team.name === "Heat") teamurl = "MIA";
  if (team.name === "Bucks") teamurl = "MIL";
  if (team.name === "Timberwolves") teamurl = "MIN";
  if (team.name === "Pelicans") teamurl = "NO";
  if (team.name === "Knicks") teamurl = "NY";
  if (team.name === "Thunder") teamurl = "OKC";
  if (team.name === "Magic") teamurl = "ORL";
  if (team.name === "76ers") teamurl = "PHI";
  if (team.name === "Suns") teamurl = "PHX";
  if (team.name === "Trail Blazers") teamurl = "POR";
  if (team.name === "Kings") teamurl = "SAC";
  if (team.name === "Spurs") teamurl = "SAN";
  if (team.name === "Raptors") teamurl = "TOR";
  if (team.name === "Jazz") teamurl = "UTA";
  if (team.name === "Wizards") teamurl = "WASH";

  return (
    <img className="teamurl" src={"../img/" + teamurl + '.png'}/>
  )
}


module.exports = Team;
