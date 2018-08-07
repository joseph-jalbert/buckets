
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
  var creds = new Buffer(process.env.MSF_CREDS).toString();
} else {
  //development
  var accessFile = require('./creds');
  var creds = new Buffer(accessFile.access).toString();
}

let freshDate;
var options = {},
    uri2018regular = 'https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/scoreboard.json?fordate=',
    uri2018playoff = 'https://api.mysportsfeeds.com/v1.2/pull/nba/2018-playoff/scoreboard.json?fordate=';

function getDate() {
  //adjust date to EST TODO: daylight savings stuff
  var d = new Date,
      offset = d.getTimezoneOffset() - 300,
      date = new Date(d.getTime() + (60000*offset));
  //show yesterday's scores until 11AM
  if (date.getHours() < 11) {
    date.setDate(date.getDate() - 1);
  }
  var yearString = date.getFullYear().toString(),
      monthString = ("0" + (date.getMonth() + 1)).slice(-2),
      dayString = ("0" + date.getDate()).slice(-2),
      dateString = yearString + monthString + dayString;

  freshDate = dateString;
  options = {
    uri: uri2018playoff + freshDate,
    headers: {
      "Authorization": "Basic " + creds
    }
  }
}

getDate();
var scoreData = {};

function callback(err, response, body) {
  scoreData.data = body;
}

function fetchJSON() {
  getDate();
  request(options, callback);
}

fetchJSON();

// season is over, will setInterval again once new season starts
// setInterval(fetchJSON, 60000);
//TODO: only set fetch interval if it's gameday

router.get('/scores/:date', (req, res) => {
  if(freshDate == req.params.date) {
    res.json(scoreData.data);
  } else {
    function customCB(err, response, body){
      res.json(body);
    }
    let uriStr;
    if ( req.params.date < 20180414 ) {
        uriStr = uri2018regular;
    } else {
        uriStr = uri2018playoff;
    }
    request({
      uri: uriStr + req.params.date,
      headers: {
        "Authorization": "Basic " + creds
        }
      }, customCB);
  }
})

app.use(router)
app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
