import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  render() {
    return(
      <div>
        <ul>
            {
                this.props.bands.map(band => {
                    return <Band handleDelete={this.props.handleDelete} key={band.id} {...band} />
                })
            }
        </ul>
      </div>
    );
  }
};

export default Bands;
