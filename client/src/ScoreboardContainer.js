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
      }, function() {
      this.refreshJSON(date);
    });
    this.toggleCalendar();
  },

  toggleCalendar: function(e) {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  },

  fetchJSON: async function(date) {
    var response = await fetch('/scores/' + this.state.startDate.format('YYYYMMDD'));
    var data  = await response.json();
    var scores  = JSON.parse(data);
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
    if(!this.state.scoreboard) return(
      <div>
        <button className="date" onClick={this.toggleCalendar}>
          {this.state.startDate.format('MM-DD-YYYY')}
        </button>
        {
          this.state.isOpen && (
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              withPortal
              inline
            />
          )
        }
        <h3 className="noGames">*** sorry hoops junkies, there are no NBA games today ***</h3>
      </div>
    );
  	return(
      <div>
        <button className="date" onClick={this.toggleCalendar}>
          {this.state.startDate.format('MM-DD-YYYY')}
        </button>
        {
          this.state.isOpen && (
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              withPortal
              inline
            />
          )
        }
  		  <GameContainer scoreboard={this.state.scoreboard}/>
      </div>
  	)
  }
});

module.exports = ScoreboardContainer;
