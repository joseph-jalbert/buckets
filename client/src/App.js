import React, { Component } from 'react';
import ScoreboardContainer from './ScoreboardContainer';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <h1>buckets</h1>
        <ScoreboardContainer/>
      </div>
    );
  }
}


export default App;
