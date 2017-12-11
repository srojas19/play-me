import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from "meteor/meteor";

class Search extends Component {

  constructor(props){
    super(props);
  }

  onKeyPress(evt) {
    if(evt.key ==='Enter') {
      // this.props.onSearch(evt.target.value);
    }
  }

  render() {
    return (
      <div>
        <br/>
        <h3>Búsqueda</h3>
        <br/>
        <div className="input-group">
          <input type="text" id='nombre'
          ref = {(input) => this.input = input} 
          defaultValue = {this.props.user}
          onKeyPress = {this.onKeyPress.bind(this)} className="form-control form-control-sm" placeholder="Usuario Github" aria-label="Nombre"/>
        </div>
        <br/>
      </div>
      
    );
  }
}

Search.PropTypes = {
  onSearch: PropTypes.func.isrequired,
  user: PropTypes.string.isrequired
}

export default Search;
