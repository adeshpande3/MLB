import React, { Component } from 'react';
import './Team.css';
import loading from './loading-bubbles.svg';
import $ from 'jquery';

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.highlightImage = this.highlightImage.bind(this);
    this.unhighlightImage = this.unhighlightImage.bind(this);
    this.showAnimation = this.showAnimation.bind(this);
    this.state = {text: '',
				  numberOfClicks: 0,
				  teamData: '',
				  animation: '',
				  image: ''}
  }

  componentDidMount() {
  	this.setState({image: 
  		<div className = "TeamPicture">
		    <img src={this.props.url} alt={this.props.teamName} onClick={this.handleClick}/>
		</div>})
  }

  highlightImage(){
    this.setState({image: 
  		<div className = "TeamPictureHighlighted">
		    <img src={this.props.url} alt={this.props.teamName} onClick={this.handleClick}/>
		</div>})
  }

  unhighlightImage(){
    this.setState({image: 
  		<div className = "TeamPicture">
		    <img src={this.props.url} alt={this.props.teamName} onClick={this.handleClick}/>
		</div>})  	
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
  		this.highlightImage()
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
  		this.unhighlightImage()
  		this.setState({text: ''})
  		this.setState({numberOfClicks: 0})
  		this.setState({teamData: ''})
  	}
  }

  render() {
    return (
    	<div>
	    	{this.state.image}
		    {this.state.animation}
	    	<div className = "TeamStats">
		    	{this.state.teamData}
		    </div>
	    </div>
    );
  }
}