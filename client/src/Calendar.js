//show the date & calendar

var React = require('react');
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


var Calendar = React.createClass({
  getInitialState: function() {
    return {
      date: this.props.date
    }
  },

  handleDateChange: function(date) {
    this.toggleCalendar();
    this.setState({
      date: date
    }, function() {
      this.props.onSelectDate(this.state.date);
    });
  },

  toggleCalendar: function(e) {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  },

  render() { return(
    <div>
      <button className="date" onClick={this.toggleCalendar}>
        {this.state.date.format('MM-DD-YYYY')}
      </button>
      {
        this.state.isOpen && (
          <DatePicker
            selected={this.state.date}
            onChange={this.handleDateChange}
            withPortal
            inline
          />
        )
      }
    </div>
    );
  }
});

module.exports = Calendar
