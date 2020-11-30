import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Achievements.scss';
import classNames from "../../utils/classNames";

const data = [
  {
    name: 'Advocates and associates',
    count: '20+'
  },
  {
    name: 'Awards and accolades',
    count: '10+'
  },
  {
    name: 'Corporate Clients',
    count: '300+'
  },
  {
    name: 'Cases',
    count: '35,000+'
  }
]
class Achievements extends Component {

  render() {
    return (
      <div className="achievements">
        {data.map((item, index) => {
          return (
            <div className='item-card' key={index}>
              <span className="count">{item.count}</span>
              <span className="name">{item.name}</span>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Achievements;
