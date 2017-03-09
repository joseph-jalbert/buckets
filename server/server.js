
const app = express()
const request = require('request')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const router = express.Router()
import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

if(process.env.MSF_CREDS) {
  //production
  var creds = new Buffer(process.env.MSF_CREDS).toString('base64');
} else {
  //development
  var accessFile = require('./creds');
  var creds = new Buffer(accessFile.access).toString('base64');
}

function getDate() {
  //adjust date to EST TODO: daylight savings stuff
  var d = new Date;
  var offset = d.getTimezoneOffset() - 300;
  var date = new Date(d.getTime() + (3600000*offset));

  //show yesterday's scores until 11AM
  if (date.getHours() < 11) {
    date.setDate(date.getDate() - 1);
  }

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
