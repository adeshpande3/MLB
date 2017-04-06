import React, { Component } from 'react';
import './ShowTeams.css';
import Team from './Team';

export default class ShowWordVectors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	var baseURL = new String( "http://mlb.mlb.com/mlb/images/team_logos/logo_" );
  	var endURL = new String( "_79x76.jpg" );
  	var teams = ['bal', 'bos', 'cws', 'cle', 'det', 'hou', 'kc', 'laa', 'min',
  				'nyy', 'oak', 'sea', 'tb', 'tex', 'tor', 'ari', 'atl', 'chc',
  				'cin', 'col', 'lad', 'mia', 'mil', 'nym', 'phi', 'pit', 'sd', 
  				'sf', 'stl', 'wsh']
  	var numTeams = teams.length
  	var arrImg = []
  	for (var i = 0; i < numTeams; i++){
  		var fullURL = baseURL + teams[i] + endURL
  		arrImg.push(<Team url = {fullURL} teamName = {teams[i]} />)
  	}
    return (
    <body>
      <div className="ShowTeams">
      	{arrImg}
      </div>
    </body>
    );
  }
}