import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
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
            <tr class="away">
              <td>
                <div>{this.state.awayTeam}</div>
              </td>
              <td>{this.state.quarterSummary.quarter[0].awayScore}</td>
              <td>{this.state.quarterSummary.quarter[1].awayScore}</td>
              <td>{this.state.quarterSummary.quarter[2].awayScore}</td>
              <td>{this.state.quarterSummary.quarter[3].awayScore}</td>
            </tr>
            <tr class="home">
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
