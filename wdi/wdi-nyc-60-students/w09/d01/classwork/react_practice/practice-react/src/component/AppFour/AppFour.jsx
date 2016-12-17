import React,  { Component }  from  'react'
import './AppFour.css'

class AppFour extends Component {
	constructor() {
		super();
		this.state = {
		 count: 0,
		};
	}

	increment() {
	  this.setState({
        count: this.state.count + 1
 	 });
	}


	decrement() {
	  this.setState({
        count: this.state.count - 1
 	 });
	}

	render() {
	 return(
       <div>
         <button onClick={this.increment.bind(this)}>+</button>
         <p>{this.state.count}</p>
         <button onClick={this.decrement.bind(this)}>-</button>
       </div>
	  );
	}
}


export default AppFour;
