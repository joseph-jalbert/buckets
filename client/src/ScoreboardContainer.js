// // this component fetches/parses the JSON and does business logic

var React = require('react');
var Calendar = require('./Calendar');
var GameContainer = require('./GameContainer');

import moment from 'moment';

var ScoreboardContainer = React.createClass({
  getInitialState: function() {
    return {
      date: moment(),
      scoreboard: []
    }
  },

  handleChange: function(chosenDate) {
    this.setState({
      date: chosenDate
      }, function() {
      this.refreshJSON(chosenDate);
    });
  },

  fetchJSON: async function(date) {
    var response = await fetch('/scores/' + this.state.date.format('YYYYMMDD'));
    var data     = await response.json();
    var scores   = JSON.parse(data);
    this.setState({scoreboard: scores.scoreboard.gameScore});
  },

  intID: 0,

  refreshJSON: function(date) {
    this.fetchJSON();
    if(this.intID > 0) {
      clearInterval(this.intID);
    }
    this.intID = setInterval(this.fetchJSON, 60000);
  },

  componentDidMount: function() {
    this.refreshJSON();
  },

  componentWillUnmount: function() {
    clearInterval(this.fetchJSON);
  },

  render: function() {
    if(!this.state.scoreboard){
      return(
        <div>
          <Calendar date={this.state.date} onSelectDate={this.handleChange}/>
          <h3 className="noGames">Sorry hoops junkies, but there are no NBA games today! Click the button to see scores for any date from the 2017-18 season</h3>
        </div>
      )
    } else{
    	return(
        <div>
          <Calendar date={this.state.date} onSelectDate={this.handleChange}/>
    		  <GameContainer scoreboard={this.state.scoreboard}/>
        </div>
    	)
    }
  }
});

module.exports = ScoreboardContainer;
