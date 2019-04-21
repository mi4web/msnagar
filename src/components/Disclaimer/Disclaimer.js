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
              <p>
                1)
                The material on the website is general information & there has been no advertisement, solicitation, personal communication, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website.
                By proceeding further and clicking the proceed button herein below, I acknowledge that:
                I wish to know more about Link Legal India Law Services (the “Firm”) for my own information and use.
                There has been no solicitation, invitation or inducement of any sort whatsoever from the Firm or any of its members.
                The information provided on the website does not constitute legal advice, nor does it create an attorney-client relationship.
                I shall not hold the Firm responsible for any action taken relying upon the contents of the website.
                I have read and understood the disclaimer above.
              </p>
              <p>2)   The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website (http://www.sheldonlawfirm.com), you acknowledge and confirm that you are seeking information relating to Sheldon Law Firm of your own accord and that there has been no form of solicitation, advertisement or inducement by Sheldon Law Firm or its members. The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Sheldon Law Firm shall not be liable for consequences of any action taken by relying on the material/information provided on this website.
              </p>
              <p>3)
                As per the rules of the Bar Council of India, law firms are not permitted to solicit work and advertise. By clicking the "Agree" button and accessing this website the user fully accepts that you are seeking information of your own accord and volition and that no form of solicitation has taken place by the Firm or its members.

                The information provided under this website is solely available at your request for information purposes only. It should not be interpreted as soliciting or advertisement. The firm is not liable for any consequence of any action taken by the user relying on material / information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.</p>
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
