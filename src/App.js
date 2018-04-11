import React, { Component } from 'react';
import './Assets/css/default.css';
import { CounterButton } from './Components/CounterButton';

// vars
//funcs



class App extends Component {
  render() {
    return (
      <div className="App">
        <head>
          <h1>Times Nasir has plugged his Coding Camp</h1>
        </head>
        <body>
        <CounterButton/>
        </body>
      </div>
    );
  }
}

export default App;
