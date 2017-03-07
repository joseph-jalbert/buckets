import React, { Component } from 'react';
import ScoreboardContainer from './ScoreboardContainer';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="main-container">
        <h1>Just BUCKETS</h1>
        <ScoreboardContainer/>
      </div>
    );
  }
}


export default App;
