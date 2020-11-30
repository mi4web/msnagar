import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SectionHeader.scss';

class SectionHeader extends Component {
  
  render() {
    return (
      <div className="section-heading">
        <span className='heading'>{this.props.text}</span>
      </div>
    );
  }
}

export default SectionHeader;
