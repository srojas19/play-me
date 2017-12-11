import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

export default class Follower extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col my-2" key={this.props.follower.id}>
          <img src={this.props.follower.images[2].url} alt={this.props.follower.name} 
                className='rounded-circle follower-image-large'/>
					<div className="font-weight-light text-truncate text-center" style={{'max-width': '150px'}}>
						{this.props.follower.name}
					</div>
      </div>
		);
	}

}