import React, { Component } from 'react';
import './Team.css';
import loading from './loading-bubbles.svg';
var pitchingData = require('./Pitching.json');
import $ from 'jquery';

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.highlightImage = this.highlightImage.bind(this);
    this.unhighlightImage = this.unhighlightImage.bind(this);
    this.showAnimation = this.showAnimation.bind(this);

    var teamData = [];
    for (var key in pitchingData){
    	if (pitchingData[key]['FIELD1'].toLowerCase() == this.props.teamName){
    		for (var field in pitchingData[key]){
    			teamData.push(<tr><th>{pitchingData[0][field]}</th>
    				<th>{pitchingData[key][field]}</th></tr>);
    		}
    	}
	}
	var listTeamData = teamData;
	//const listTeamData = teamData.map((numbers) =>
	//  <th>{numbers}</th>
	//);
    this.state = {text: '',
				  numberOfClicks: 0,
				  teamData: <table className="teamTable">{listTeamData}</table>,
				  showFirstTeamData: '',
				  showSecondTeamData: '',
				  animation: '',
				  image: '',}
  }

  componentDidMount() {
  	this.setState({image: 
  		<div className="TeamPicture">
		    <img src={this.props.url} alt={this.props.teamName} 
		    onClick={this.handleClick} />
  		</div>})
  }

  highlightImage(){
    this.setState({image: 
		    <img src={this.props.url} alt={this.props.teamName} 
		    onClick={this.handleClick} className="TeamPictureHighlighted"/>})
  }

  unhighlightImage(){
    this.setState({image: 
		    <img src={this.props.url} alt={this.props.teamName} 
		    onClick={this.handleClick} className = "TeamPicture"/>})  	
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

  		//Tried to get MLB data in JSON form from the mySportsFeed website
  		//but ended up just using local JSON files

  		//var root = 'http://example.com/foobar';
	    //$.ajax({
	    //  url: root,
	    //  type: 'GET',
	    //  dataType: 'json',
	    //  async: false,
	    //}).then(function(data) {
	    //  that.setState({ teamData: JSON.stringify(data, null, 2)});
	    //});


	    this.setState({showFirstTeamData: this.state.teamData, 
	    			   showSecondTeamData: this.state.teamData, 
	    			   animation: '',
	    			   text: this.props.teamName,
	    			   numberOfClicks: 1})
  	} else{
  		this.unhighlightImage()
  		this.setState({text: '',
  					   numberOfClicks: 0,
  					   showFirstTeamData: '',
  					   showSecondTeamData: ''})
  	}
  }

  render() {
    return (
    	<div>
	    	{this.state.image}
		    {this.state.animation}
	    	<div className = "FirstTeamStats">
	    		{this.state.showFirstTeamData}
		    </div>
	    	<div className = "SecondTeamStats">
	    		{this.state.showSecondTeamData}
		    </div>
	    </div>
    );
  }
}