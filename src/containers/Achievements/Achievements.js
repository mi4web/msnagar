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
  
  componentDidMount() {
    window.AOS.init();
  }
  
  render() {
    return (
      <div className="achievements">
        {data.map((item, index) => {
          return (
            <div className='item-card' key={index} data-aos="slide-up" data-aos-duration="1500" data-aos-delay={index * 150}>
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
