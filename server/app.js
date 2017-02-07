// server/app.js
const express = require('express');
const path = require('path');
var request = require('request');
var buffer = require('buffer');

const app = express();

// Serve static assets
// app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res, next) => {
		  // res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
		  var creds = new Buffer('username:password').toString('base64');
		  var options = {
				uri: 'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/scoreboard.json?fordate=20170202',
				headers: {
				 	"Authorization": "Basic " + creds
				}
			}
			function callback(err, response, body) {
					res.send(body);
			}

		  request(options, callback);
	}
	// (req, res) => {
	// 	    	res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
	// }
);

console.log('fo');

module.exports = app;

