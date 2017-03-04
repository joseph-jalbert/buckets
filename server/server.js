import bodyParser from 'body-parser'
import express from 'express'
var accessFile = require('./creds')

const app = express()
const request = require('request')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const router = express.Router()


router.get('/scores', (req, res) => {
  var creds = new Buffer(accessFile.access).toString('base64');
  var date = new Date;
  var year = date.getFullYear();
  var yearString = year.toString();
  var monthString = ("0" + (date.getMonth() + 1)).slice(-2);
  var dayString = ("0" + date.getDate()).slice(-2);
  var dateString = yearString + monthString + dayString;

	var options = {
		uri: 'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/scoreboard.json?fordate=' + dateString,
		headers: {
		 	"Authorization": "Basic " + creds
		}
	}
	function callback(err, response, body) {
		res.json(body);
	}
  request(options, callback);
})

app.use(router)
app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
