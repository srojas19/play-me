import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

export default class ArtistBrief extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col my-2" key={this.props.artist.id}>
          <img src={this.props.artist.images[2].url} alt={this.props.artist.name} 
                className='rounded-circle artist-image-large'/>
					<div className="font-weight-light text-truncate text-center" style={{'max-width': '100px'}}>
						{this.props.artist.name}
					</div>
      </div>
		);
	}

}