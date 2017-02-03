import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(props) {

    // var request = new Request('https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/scoreboard.json?fordate=20170202', {
    //   method: 'GET',     
    //   headers: new Headers({
    //     'Authorization': 'Basic' + btoa('BLAH'),
    //     // 'Access-Control-Allow-Credentials': true
    //     // 'Access-Control-Allow-Origin': '*',
    //   })
    // });

    // fetch(request).then(function(response) {
    //     return response.json();
    // }).then(function(j) {
    //   console.log(j);
    // });

    $.ajax({
        type: "GET",
        url: 'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/scoreboard.json?fordate=20170202',
        dataType: 'json',
        async: false,
        headers: {
          "Authorization": "Basic " + btoa('u:p')
        },
        success: function (data){
          console.log(data.scoreboard.gameScore[0].homeScore);
      }
    });





    super(props);
    this.state = {
      awayTeam: "Knicks",
      homeTeam: "Nets",
      quarterSummary: {
        quarter: [
          {
            number: "1",
            awayScore: "23",
            homeScore: "42"
          },
          {
            number: "2",
            awayScore: "32",
            homeScore: "12"
          },
          {
            number: "3",
            awayScore: "13",
            homeScore: "03"
          },
          {
            number: "4",
            awayScore: "17",
            homeScore: "43"
          },
        ]
      },
      awayScore: "100",
      homeScore: "89",
      currentQuarter: "4",
      currentQuarterSecondsRemaining: "10",
    }
  }


  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Quarter {this.state.currentQuarter}</th>
              <th>{this.state.quarterSummary.quarter[0].number}</th>
              <th>{this.state.quarterSummary.quarter[1].number}</th>
              <th>{this.state.quarterSummary.quarter[2].number}</th>
              <th>{this.state.quarterSummary.quarter[3].number}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="away">
              <td>
                <div>{this.state.awayTeam}</div>
              </td>
              <td>{this.state.quarterSummary.quarter[0].awayScore}</td>
              <td>{this.state.quarterSummary.quarter[1].awayScore}</td>
              <td>{this.state.quarterSummary.quarter[2].awayScore}</td>
              <td>{this.state.quarterSummary.quarter[3].awayScore}</td>
            </tr>
            <tr className="home">
              <td>
                <div>{this.state.homeTeam}</div>
              </td>
              <td>{this.state.quarterSummary.quarter[0].homeScore}</td>
              <td>{this.state.quarterSummary.quarter[1].homeScore}</td>
              <td>{this.state.quarterSummary.quarter[2].homeScore}</td>
              <td>{this.state.quarterSummary.quarter[3].homeScore}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    );
  }
}

export default App;
