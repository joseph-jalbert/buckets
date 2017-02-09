// server/app.js
const express = require('express');
const path = require('path');
var request = require('request');
var buffer = require('buffer');

const app = express();
var router = express.Router();

// Serve static assets
// app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
// app.get('/', (req, res, next) => {
// 		  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));	  
// 	}
// );

app.get('/', function(req, res) {
	var creds = new Buffer('u:p').toString('base64');
  	var options = {
		uri: 'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/scoreboard.json?fordate=20170202',
		headers: {
		 	"Authorization": "Basic " + creds
		}
	}
	function callback(err, response, body) {
		res.send(body);
		console.log(body);
	}
	
  	request(options, callback);
});


module.exports = app;

