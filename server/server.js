
const app = express()
const request = require('request')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const router = express.Router()
import bodyParser from 'body-parser'
import express from 'express'
var accessFile = require('./creds')
import path from 'path'
const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

var creds = new Buffer(accessFile.access).toString('base64');

function getDate() {
  var date = new Date;
  var year = date.getFullYear();
  var yearString = year.toString();
  var monthString = ("0" + (date.getMonth() + 1)).slice(-2);
  var dayString = ("0" + date.getDate()).slice(-2);
  var dateString = yearString + monthString + dayString;
  return dateString;
}

function getOptions() {
  var options = {
    uri: 'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/scoreboard.json?fordate=' + getDate(),
    headers: {
      "Authorization": "Basic " + creds
    }
  }
  return options;
}

var cachedOptions = getOptions();

function dateCheck() {
  //if all games are done, refresh the date
  var scores  = JSON.parse(scoreData.data);
  var games = scores.scoreboard.gameScore;
  var getNewDate = true;
  for (var game in games) {
    if(games[game].isCompleted === "false") {
      getNewDate = false;
    }
  }
  if(getNewDate) {
    return getOptions();
  }
}

var scoreData = {};

function callback(err, response, body) {
  scoreData.data = body;
}

request(getOptions(), callback);
setInterval(request, 60000, getOptions(), callback);

router.get('/scores', (req, res) => {
  res.json(scoreData.data);
})

app.use(router)
app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
