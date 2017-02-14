import React, { Component } from 'react';
import './ShowTeams.css';

export default class ShowWordVectors extends Component {
  constructor(props) {
    super(props);
    this.state = {word: 'gf'};
  }


  render() {
    return (
      <div className="ShowTeams">
      	<img src={'http://logonoid.com/images/los-angeles-dodgers-logo.gif'} height="420" width="420" />
      </div>
    );
  }
}