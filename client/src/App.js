import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {scoreboard: []}
  async componentDidMount() {
    var response = await fetch('/scores')
    var data  = await response.json()
    var scores  = JSON.parse(data);
    this.setState({scoreboard: scores.scoreboard.gameScore});
    console.log(scores.scoreboard.gameScore);
  }
      
  render() {
    return (
      <div>
        <ul>
        {this.state.scoreboard.map(event => {
          return(<li key={event.game.ID}>{event.game.ID}</li>)
          })
        }
        </ul>
      </div>
    );
  }
}
export default App;