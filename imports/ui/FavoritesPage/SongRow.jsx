import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

export default class SongRow extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<tr>
        <th>{this.props.index}</th>
        <td>{this.props.track.name}</td>
        <td>{this.props.track.album.name}</td>
        <td>{this.props.track.artists[0].name}</td>
        <td>{this.props.track.popularity}</td>
      </tr> 
		);
	}

}