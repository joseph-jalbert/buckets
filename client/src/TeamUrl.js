var React = require('react');

function Team(team) {
  var baseurl = "http://www.nba.com/";
  let teamurl;
  if (team.name === "Hawks") teamurl = baseurl + "hawks";
  if (team.name === "Nets") teamurl = baseurl + "nets";
  if (team.name === "Celtics") teamurl = baseurl + "celtics";
  if (team.name === "Hornets") teamurl = baseurl + "hornets";
  if (team.name === "Bulls") teamurl = baseurl + "bulls";
  if (team.name === "Cavaliers") teamurl = baseurl + "cavaliers";
  if (team.name === "Mavericks") teamurl = baseurl + "mavericks";
  if (team.name === "Nuggets") teamurl = baseurl + "nuggets";
  if (team.name === "Pistons") teamurl = baseurl + "pistons";
  if (team.name === "Warriors") teamurl = baseurl + "warriors";
  if (team.name === "Rockets") teamurl = baseurl + "rockets";
  if (team.name === "Pacers") teamurl = baseurl + "pacers";
  if (team.name === "Clippers") teamurl = baseurl + "clippers";
  if (team.name === "Lakers") teamurl = baseurl + "lakers";
  if (team.name === "Grizzlies") teamurl = baseurl + "grizzlies";
  if (team.name === "Heat") teamurl = baseurl + "heat";
  if (team.name === "Bucks") teamurl = baseurl + "bucks";
  if (team.name === "Timberwolves") teamurl = baseurl + "nets";
  if (team.name === "Pelicans") teamurl = baseurl + "pelicans";
  if (team.name === "Knicks") teamurl = baseurl + "knicks";
  if (team.name === "Thunder") teamurl =baseurl + "thunder";
  if (team.name === "Magic") teamurl = baseurl + "magic";
  if (team.name === "76ers") teamurl = baseurl + "sixers";
  if (team.name === "Suns") teamurl = baseurl + "suns";
  if (team.name === "Trail Blazers") teamurl = baseurl + "blazers";
  if (team.name === "Kings") teamurl = baseurl + "blazers";
  if (team.name === "Spurs") teamurl = baseurl + "spurs";
  if (team.name === "Raptors") teamurl = baseurl + "raptors";
  if (team.name === "Jazz") teamurl = baseurl + "jazz";
  if (team.name === "Wizards") teamurl = baseurl + "wizards";

  return (
    <a href={teamurl} target="_blank">{team.name}</a>
  )
}


module.exports = Team;
