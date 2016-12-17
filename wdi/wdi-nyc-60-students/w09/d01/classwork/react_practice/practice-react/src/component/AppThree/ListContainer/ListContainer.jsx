import React, { Component } from 'react';
import './ListContainer.css'

class ListContainer extends Component {
	render() {
		const interests = this.props.interests.map((int, i) => {
			return (
			<li key={i}>
			  {int}
			</li>
		   );
		});

	   return (
          <div className="interests-container">
            <h2> interests </h2>
            <ul>
              {interests}
            </ul>
          </div>
	   	);
	}
}


export default ListContainer;
