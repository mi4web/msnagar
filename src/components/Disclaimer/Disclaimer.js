import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Disclaimer.scss';

class Disclaimer extends Component {
  render() {
    return (
        <div className="disclaimer">
          <div className="content">
            <div className="desc">
              <h2>Disclaimer</h2>
              As per the rules of the Bar Council of India, law firms are not permitted to solicit work and advertise. The material on the website is general information & there has been no advertisement, solicitation, communication, invitation or inducement of any sort whatsoever from M S Nagar and Co, Advocates and Solicitors or any of its members to solicit any work through this website. The Firm responsible for any action taken relying upon the contents of the website. The information provided on the website does not constitute legal advice, nor does it create an attorney-client relationship. The firm is not liable for any consequence of any action taken by the user relying on material / information provided under this website. By clicking the "I Agree" button the visitor accepts that you are seeking information of your own accord and volition.
              <div className="action flex-row">
                <button className="primary" onClick={this.props.onAgree}>I Agree</button>
                <button className="default" onClick={() => {
                  window.history.go(-1);
                }}>I Disagree</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(Disclaimer);
