import React, { Component } from 'react';
import logo from './MLB_Logo.jpg';
import './App.css';
import ShowTeams from './ShowTeams';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h1 className="App-title">MLB Ap</h1>  
          <img src={logo} className="App-logo" alt="logo" />   
           
           <h2>Test</h2>    
        </div>
        <p className="App-intro">
          Insert info about the app and what it does.
        </p>
        <ShowTeams />
      </div>
    );
  }
}

export default App;
