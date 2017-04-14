import React, { Component } from 'react';
import logo from './MLB_Logo.jpg';
import './App.css';
import ShowTeams from './ShowTeams';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="logo"/>  
      </div>
          <h1>MLB App</h1>   
        
        <p className="App-intro">
          Click on each team to see their stats for the 2016 season. 
        </p>
        <ShowTeams />
      </div>
    );
  }
}

export default App;
