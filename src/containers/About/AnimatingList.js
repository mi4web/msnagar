import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactWOW from 'react-wow'

class AnimatingList extends Component {
  render() {
    const {head, desc} = this.props;
    return (
        <div className="animationList">
          <span className="head">{head}</span>
          {desc}
          <ul>
            {
              this.props.children.map((x, index) =>
                  <ReactWOW key={index} animation="fadeIn">
                    {x}
                  </ReactWOW>)
            }
          </ul>
        </div>
    );
  }
}

export default AnimatingList;
