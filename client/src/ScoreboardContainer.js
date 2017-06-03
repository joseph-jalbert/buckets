// // this component fetches/parses the JSON and does business logic

var React = require('react');
var GameContainer = require('./GameContainer');
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import ChooseDate from './DatePicker';

var ScoreboardContainer = React.createClass({
  getInitialState: function() {
    return {
      startDate: moment(),
      scoreboard: []
    }
  },

  handleChange: function(date) {
    this.setState({
      startDate: date
    });
    var newDate = date.format('YYYYMMDD');
    this.refreshJSON();
  },

  fetchJSON: async function() {
    var response = await fetch('/scores');
    var data  = await response.json();
    var scores  = JSON.parse(data);
    this.setState({scoreboard: scores.scoreboard.gameScore});
  },

  refreshJSON: function() {
    this.fetchJSON();
    setInterval(this.fetchJSON, 60000);
  },

  componentDidMount: function() {
    this.refreshJSON();
  },

  componentWillUnmount: function() {
    clearInterval(this.fetchJSON);
  },

  render: function() {
    //  if(!this.state.scoreboard) return(<h3 className="noGames">*** sorry hoops junkies, there are no NBA games today ***</h3>);
  	return(
      <div>
        <DatePicker
            inline
            selected={this.state.startDate}
            onChange={this.handleChange}
        />
  		{/* <GameContainer scoreboard={this.state.scoreboard}/> */}
    </div>
  	)
  }
});

module.exports = ScoreboardContainer;
