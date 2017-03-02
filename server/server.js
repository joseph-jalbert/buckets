import bodyParser from 'body-parser'
import express from 'express'

const app = express()
const request = require('request')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const router = express.Router()


router.get('/scores', (req, res) => {
  var creds = new Buffer('u:p').toString('base64');
	var options = {
		uri: 'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/scoreboard.json?fordate=20170223',
		headers: {
		 	"Authorization": "Basic " + creds
		}
	}
	function callback(err, response, body) {
		var tempJSON = JSON.stringify({
	scoreboard: {
		lastUpdatedOn: "2017-02-25 12:11:58 AM",
		gameScore: [
		{
		game: {
		ID: "34796",
		date: "2017-02-24",
		time: "7:00PM",
		awayTeam: {
		ID: "94",
		City: "Washington",
		Name: "Wizards",
		Abbreviation: "WAS"
		},
		homeTeam: {
		ID: "85",
		City: "Philadelphia",
		Name: "76ers",
		Abbreviation: "PHI"
		},
		location: "Wells Fargo Center"
		},
		isUnplayed: "false",
		isInProgress: "false",
		isCompleted: "true",
		awayScore: "112",
		homeScore: "120",
		quarterSummary: {
		quarter: [
		{
		"@number": "1",
		awayScore: "28",
		homeScore: "26"
		},
		{
		"@number": "2",
		awayScore: "21",
		homeScore: "35"
		},
		{
		"@number": "3",
		awayScore: "32",
		homeScore: "34"
		},
		{
		"@number": "4",
		awayScore: "31",
		homeScore: "25"
		}
		]
		}
		},
		{
		game: {
		ID: "34797",
		date: "2017-02-24",
		time: "7:00PM",
		awayTeam: {
		ID: "107",
		City: "Memphis",
		Name: "Grizzlies",
		Abbreviation: "MEM"
		},
		homeTeam: {
		ID: "87",
		City: "Indiana",
		Name: "Pacers",
		Abbreviation: "IND"
		},
		location: "Bankers Life Fieldhouse"
		},
		isUnplayed: "false",
		isInProgress: "false",
		isCompleted: "true",
		awayScore: "92",
		homeScore: "102",
		quarterSummary: {
		quarter: [
		{
		"@number": "1",
		awayScore: "26",
		homeScore: "25"
		},
		{
		"@number": "2",
		awayScore: "23",
		homeScore: "36"
		},
		{
		"@number": "3",
		awayScore: "19",
		homeScore: "28"
		},
		{
		"@number": "4",
		awayScore: "24",
		homeScore: "13"
		}
		]
		}
		},
		{
		game: {
		ID: "34798",
		date: "2017-02-24",
		time: "7:30PM",
		awayTeam: {
		ID: "82",
		City: "Boston",
		Name: "Celtics",
		Abbreviation: "BOS"
		},
		homeTeam: {
		ID: "81",
		City: "Toronto",
		Name: "Raptors",
		Abbreviation: "TOR"
		},
		location: "Air Canada Centre"
		},
		isUnplayed: "false",
		isInProgress: "false",
		isCompleted: "false",
		currentIntermission: "4",
		awayScore: "97",
		homeScore: "107",
		quarterSummary: {
		quarter: [
		{
		"@number": "1",
		awayScore: "29",
		homeScore: "18"
		},
		{
		"@number": "2",
		awayScore: "26",
		homeScore: "27"
		},
		{
		"@number": "3",
		awayScore: "22",
		homeScore: "29"
		},
		{
		"@number": "4",
		awayScore: "20",
		homeScore: "33"
		}
		]
		}
		},
		{
		game: {
		ID: "34799",
		date: "2017-02-24",
		time: "8:00PM",
		awayTeam: {
		ID: "104",
		City: "Phoenix",
		Name: "Suns",
		Abbreviation: "PHX"
		},
		homeTeam: {
		ID: "89",
		City: "Chicago",
		Name: "Bulls",
		Abbreviation: "CHI"
		},
		location: "United Center"
		},
		isUnplayed: "false",
		isInProgress: "true",
		isCompleted: "false",
		awayScore: "0",
		homeScore: "0",
		quarterSummary: null
		},
		{
		game: {
		ID: "34800",
		date: "2017-02-24",
		time: "8:00PM",
		awayTeam: {
		ID: "98",
		City: "Utah",
		Name: "Jazz",
		Abbreviation: "UTA"
		},
		homeTeam: {
		ID: "90",
		City: "Milwaukee",
		Name: "Bucks",
		Abbreviation: "MIL"
		},
		location: "BMO Harris Bradley Center"
		},
		isUnplayed: "false",
		isInProgress: "false",
		isCompleted: "false",
		currentIntermission: "4",
		awayScore: "109",
		homeScore: "95",
		quarterSummary: {
		quarter: [
		{
		"@number": "1",
		awayScore: "36",
		homeScore: "27"
		},
		{
		"@number": "2",
		awayScore: "23",
		homeScore: "19"
		},
		{
		"@number": "3",
		awayScore: "28",
		homeScore: "29"
		},
		{
		"@number": "4",
		awayScore: "22",
		homeScore: "20"
		}
		]
		}
		},
		{
		game: {
		ID: "34801",
		date: "2017-02-24",
		time: "8:00PM",
		awayTeam: {
		ID: "105",
		City: "Los Angeles",
		Name: "Lakers",
		Abbreviation: "LAL"
		},
		homeTeam: {
		ID: "96",
		City: "Oklahoma City",
		Name: "Thunder",
		Abbreviation: "OKL"
		},
		location: "Chesapeake Energy Arena"
		},
		isUnplayed: "false",
		isInProgress: "false",
		isCompleted: "false",
		currentIntermission: "4",
		awayScore: "93",
		homeScore: "110",
		quarterSummary: {
		quarter: [
		{
		"@number": "1",
		awayScore: "23",
		homeScore: "29"
		},
		{
		"@number": "2",
		awayScore: "28",
		homeScore: "29"
		},
		{
		"@number": "3",
		awayScore: "19",
		homeScore: "28"
		},
		{
		"@number": "4",
		awayScore: "23",
		homeScore: "24"
		}
		]
		}
		},
		{
		game: {
		ID: "34802",
		date: "2017-02-24",
		time: "8:00PM",
		awayTeam: {
		ID: "108",
		City: "Dallas",
		Name: "Mavericks",
		Abbreviation: "DAL"
		},
		homeTeam: {
		ID: "100",
		City: "Minnesota",
		Name: "Timberwolves",
		Abbreviation: "MIN"
		},
		location: "Target Center"
		},
		isUnplayed: "false",
		isInProgress: "false",
		isCompleted: "true",
		awayScore: "84",
		homeScore: "97",
		quarterSummary: {
		quarter: [
		{
		"@number": "1",
		awayScore: "22",
		homeScore: "26"
		},
		{
		"@number": "2",
		awayScore: "18",
		homeScore: "23"
		},
		{
		"@number": "3",
		awayScore: "23",
		homeScore: "22"
		},
		{
		"@number": "4",
		awayScore: "21",
		homeScore: "26"
		}
		]
		}
		},
		{
		game: {
		ID: "34803",
		date: "2017-02-24",
		time: "8:00PM",
		awayTeam: {
		ID: "92",
		City: "Miami",
		Name: "Heat",
		Abbreviation: "MIA"
		},
		homeTeam: {
		ID: "91",
		City: "Atlanta",
		Name: "Hawks",
		Abbreviation: "ATL"
		},
		location: "Philips Arena"
		},
		isUnplayed: "false",
		isInProgress: "false",
		isCompleted: "false",
		currentIntermission: "4",
		awayScore: "108",
		homeScore: "90",
		quarterSummary: {
		quarter: [
		{
		"@number": "1",
		awayScore: "25",
		homeScore: "24"
		},
		{
		"@number": "2",
		awayScore: "38",
		homeScore: "25"
		},
		{
		"@number": "3",
		awayScore: "24",
		homeScore: "17"
		},
		{
		"@number": "4",
		awayScore: "21",
		homeScore: "24"
		}
		]
		}
		},
		{
		game: {
		ID: "34804",
		date: "2017-02-24",
		time: "9:00PM",
		awayTeam: {
		ID: "84",
		City: "Brooklyn",
		Name: "Nets",
		Abbreviation: "BRO"
		},
		homeTeam: {
		ID: "99",
		City: "Denver",
		Name: "Nuggets",
		Abbreviation: "DEN"
		},
		location: "Pepsi Center"
		},
		isUnplayed: "false",
		isInProgress: "true",
		isCompleted: "false",
		currentQuarter: "3",
		currentQuarterSecondsRemaining: "174",
		awayScore: "71",
		homeScore: "90",
		quarterSummary: {
		quarter: [
		{
		"@number": "1",
		awayScore: "25",
		homeScore: "30"
		},
		{
		"@number": "2",
		awayScore: "28",
		homeScore: "34"
		},
		{
		"@number": "3",
		awayScore: "18",
		homeScore: "26"
		}
		]
		}
		},
		{
		game: {
		ID: "34805",
		date: "2017-02-24",
		time: "10:30PM",
		awayTeam: {
		ID: "106",
		City: "San Antonio",
		Name: "Spurs",
		Abbreviation: "SAS"
		},
		homeTeam: {
		ID: "102",
		City: "Los Angeles",
		Name: "Clippers",
		Abbreviation: "LAC"
		},
		location: "Staples Center"
		},
		isUnplayed: "false",
		isInProgress: "true",
		isCompleted: "false",
		currentQuarter: "3",
		currentQuarterSecondsRemaining: "433",
		awayScore: "53",
		homeScore: "57",
		quarterSummary: {
		quarter: [
		{
		"@number": "1",
		awayScore: "18",
		homeScore: "13"
		},
		{
		"@number": "2",
		awayScore: "29",
		homeScore: "29"
		},
		{
		"@number": "3",
		awayScore: "6",
		homeScore: "15"
		}
		]
		}
		}
		]
	}
});
		res.json(tempJSON);
	}

  request(options, callback);
})
app.use(router)
app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
