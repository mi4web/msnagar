import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';
import classNames from "../../utils/classNames";

const isLarge = window.innerWidth > 768;

class Contact extends Component {
  
  render() {
    let width = 300, height = 300;
    if (isLarge) {
      width = 600;
      height = 500;
    }
    const { showMap, noBg } = this.props
    return (
      <div className={classNames("flex-col a-c contact", { isLarge, 'no-bg': noBg })}>
        {showMap && (
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width={width} height={height} id="gmap_canvas"
                      src="https://maps.google.com/maps?q=28.582852,77.252653&ie=UTF8&iwloc=&output=embed" frameBorder="0"
                      scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
          </div>
        )}
        <div className="address">
          <div>
            <b>Delhi Office:</b> <br/>
            C-5, jangpura B, Mathura Road, <br/>
            New Delhi-110014 <br/>
            <span className="email">
                <b>Email:</b>
              <a href="mailto:m.nagar@msnagarandco.com">
                m.nagar@msnagarandco.com
              </a>
              </span>
          </div>
          <div>
            <b>Gurugram Office:</b> <br/>
            Chamber No. A-27, <br/>
            Lawyers Chambers<br/>
            District Court, Gurugram <br/>
          </div>
          <div>
            <b>Faridabad Office:</b> <br/>
            Kothi No. J-68,<br/>
            DLF, Sector 10 <br/>
            Faridabad-121006 <br/>
          </div>
          
          {/*<div className="contactItem">

                    </div>*/}
        </div>
      </div>
    );
  }
}

export default Contact;
