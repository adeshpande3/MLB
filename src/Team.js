import React, { Component } from 'react';
import './Team.css';
import $ from 'jquery';

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {text: '',
				  numberOfClicks: 0,
				  teamData: ''}
  }

  handleClick(){
  	if (this.state.numberOfClicks == 0){
  		var that = this;
		var username = "adeshpande3"
		var password = "sportsfeedapi"

// TODO Create a loader so the animation looks nice while loading 
// https://www.w3schools.com/howto/howto_css_loader.asp

  		var root = 'https://www.mysportsfeeds.com/api/feed/pull/mlb/2016-regular/daily_game_schedule.json?fordate=20160707';
	    $.ajax({
	      url: root,
	      type: 'GET',
	      dataType: 'json',
	      async: false,
	      headers: {
		    "Authorization": "Basic " + btoa(username + ":" + password)
		  }
	    }).then(function(data) {
	      that.setState({ teamData: JSON.stringify(data, null, 2)});
	    });
  		this.setState({text: this.props.teamName})
  		this.setState({numberOfClicks: 1})
  	} else{
  		this.setState({text: ''})
  		this.setState({numberOfClicks: 0})
  		this.setState({teamData: ''})
  	}
  }

  render() {
    return (
    	<div>
	    	<div className = "TeamPicture">
		    	<img src={this.props.url} alt={this.props.teamName} onClick={this.handleClick}/>
		    </div>
	    	<div className = "TeamStats">
		    	{this.state.teamData}
		    </div>
	    </div>
    );
  }
}