import React, { Component } from 'react';
import ScoreboardContainer from './ScoreboardContainer';
import ChooseDate from './DatePicker';

import './App.css';

class App extends Component {
  render() {
    return(
      <div className="main-container">
        <header>
          <h1 className="col-xs-12 header">Just BUCKETS</h1>
        </header>
        <ChooseDate />
        <ScoreboardContainer/>
      </div>
    );
  }
}


export default App;
