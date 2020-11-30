import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomePage.scss';
import Achievements from "../Achievements/Achievements";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import Expertise from "../Expertise/Expertise";
import SectionHeader from "../SectionHeader/SectionHeader";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        
        <div className="description-wrapper">
          <div className="description sideGutter text-large">
            M. S. Nagar &amp; Co. is a full-service law firm, providing legal services to its clients for over three
            decades now. We at M. S. Nagar &amp; Co. aim to provide single-window Legal services. The firm
            brings together highly specialized professionals to effectively cater to the legal requirements of
            more than 300 companies and corporate houses (including Multinationals) as its clientele. Our
            moto is to provide a synergetic environment to its client by understanding the clients’ perspective
            and needs. Read More (to about us page).
          </div>
        </div>
        <div>
          <Achievements />
        </div>
        <div>
          <div className="heading sideGutter">
            <SectionHeader text="Our Expertise"/>
          </div>
          <div className='sideGutter'>
            <Expertise />
          </div>
        </div>
        <div className="clients-section">
          <div className="heading sideGutter">
            <SectionHeader text="Our Clients"/>
          </div>
          <div className='sideGutter'>
            <Clients />
          </div>
        </div>
        <div>
          <div className="heading sideGutter">
            <SectionHeader text="Contact us"/>
          </div>
          <div className='sideGutter'>
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
