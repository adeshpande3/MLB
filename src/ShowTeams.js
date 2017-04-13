import React, { Component } from 'react';
import './ShowTeams.css';
import Team from './Team';

export default class ShowWordVectors extends Component {
  constructor(props) {
    super(props);
    this.state = {
			  showFirstTeamData: '',
			  showSecondTeamData: ''}
  }

  render() {
  	var baseURL = new String( "http://mlb.mlb.com/mlb/images/team_logos/logo_" );
  	var endURL = new String( "_79x76.jpg" );
  	var teams = ['bal', 'bos', 'cws', 'cle', 'det', 'hou', 'kc', 'laa', 'min',
  				'nyy', 'oak', 'sea', 'tb', 'tex', 'tor', 'ari', 'atl', 'chc',
  				'cin', 'col', 'lad', 'mia', 'mil', 'nym', 'phi', 'pit', 'sd', 
  				'sf', 'stl', 'wsh']
  	var numTeams = teams.length
  	const arrImg = teams.map(function(team) {
  		var fullURL = baseURL + team + endURL
  		return <Team url={fullURL} teamName={team} key={team} />
  	});
  	
    return (
    <body>
      <div className="ShowTeams">
      	{arrImg}
      </div>
    </body>
    );
  }
}