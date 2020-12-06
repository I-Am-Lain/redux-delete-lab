import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        Name: {this.props.name}
        <button type='button' onClick={() => this.props.handleDelete(this.props.id)}>Delete Moi</button>
      </li>
    );
  }
};

export default Band;
