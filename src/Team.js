import React, { Component } from 'react';
import './Team.css';
import loading from './loading-bubbles.svg';
import $ from 'jquery';

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.showAnimation = this.showAnimation.bind(this);
    this.state = {text: '',
				  numberOfClicks: 0,
				  teamData: '',
				  animation: ''}
  }

  showAnimation(){
  	this.setState({animation: 
  		<div className = "Loading">
  			<img src={loading} alt="Loading icon" />
  		</div>})
  }

  handleClick(){
  	if (this.state.numberOfClicks == 0){
  		this.showAnimation()
  		var that = this;
		var username = "adeshpande3"
		var password = "sportsfeedapi"

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
	    this.setState({animation: ''})
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
		    {this.state.animation}
	    	<div className = "TeamStats">
		    	{this.state.teamData}
		    </div>
	    </div>
    );
  }
}