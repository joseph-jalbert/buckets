import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>3:33 3rd</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            <tr class="away">
              <td>
                <div>img</div>
                <div>awayteam</div>
              </td>
              <td>23</td>
              <td>11</td>
              <td>33</td>
              <td></td>
            </tr>
            <tr class="home">
              <td>
                <div>img</div>
                <div>awayteam</div>
              </td>
              <td>42</td>
              <td>13</td>
              <td>21</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      
    );
  }
}

export default App;
