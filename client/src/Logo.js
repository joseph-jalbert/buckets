var React = require('react');

function Logo(team) {
  let logo;
  if (team.name === "Hawks") logo = "ATL";
  if (team.name === "Nets") logo = "BK";
  if (team.name === "Celtics") logo = "BOS";
  if (team.name === "Hornets") logo = "CHA";
  if (team.name === "Bulls") logo = "CHI";
  if (team.name === "Cavaliers") logo = "CLE";
  if (team.name === "Mavericks") logo = "DAL";
  if (team.name === "Nuggets") logo = "DEN";
  if (team.name === "Pistons") logo = "DET";
  if (team.name === "Warriors") logo = "GS";
  if (team.name === "Rockets") logo = "HOU";
  if (team.name === "Pacers") logo = "IND";
  if (team.name === "Clippers") logo = "LAC";
  if (team.name === "Lakers") logo = "LAL";
  if (team.name === "Grizzlies") logo = "MEM";
  if (team.name === "Heat") logo = "MIA";
  if (team.name === "Bucks") logo = "MIL";
  if (team.name === "Timberwolves") logo = "MIN";
  if (team.name === "Pelicans") logo = "NO";
  if (team.name === "Knicks") logo = "NY";
  if (team.name === "Thunder") logo = "OKC";
  if (team.name === "Magic") logo = "ORL";
  if (team.name === "76ers") logo = "PHI";
  if (team.name === "Suns") logo = "PHX";
  if (team.name === "Trail Blazers") logo = "POR";
  if (team.name === "Kings") logo = "SAC";
  if (team.name === "Spurs") logo = "SAN";
  if (team.name === "Raptors") logo = "TOR";
  if (team.name === "Jazz") logo = "UTA";
  if (team.name === "Wizards") logo = "WASH";

  return (
    <div className="image">
      <img className="logo" src={"../img/" + logo + '.png'}/>
    </div>
  )
}


module.exports = Logo;
