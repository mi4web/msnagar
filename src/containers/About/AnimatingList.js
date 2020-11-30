import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
                  <div key={index}>
                    {x}
                  </div>)
            }
          </ul>
        </div>
    );
  }
}

export default AnimatingList;
