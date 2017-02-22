import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {scoreboard: []}
  async componentDidMount() {
    const response = await fetch('/scores')
    const scoreboard  = await response.json()
    this.setState({scoreboard: scoreboard});
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.scoreboard}
        </ul>
      </div>
    );
  }
}
export default App;