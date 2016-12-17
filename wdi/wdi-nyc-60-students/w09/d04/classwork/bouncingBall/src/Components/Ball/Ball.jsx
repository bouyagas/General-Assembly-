import React, { Component } from 'react';
import './Ball.css';

export default class Ball extends Component {
	render(){
		return(
		  <div>
              <img
              src={this.props.url} alt=""
                onClick={this.props.selectRandomBall}
              />
           </div>
		);
	}
}
