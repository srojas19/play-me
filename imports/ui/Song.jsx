import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

export default class Song extends Component {

	render () {
		return (
			<li>
				<h4> {this.props.name} </h4>
				<h4> {this.props.album} </h4>
				<h4> {this.props.artist} </h4>
			</li>
		) 

	}

}