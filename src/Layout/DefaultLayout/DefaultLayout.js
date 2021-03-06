import React, {Component} from "react";
import PropTypes from "prop-types";
import "./DefaultLayout.scss";
import AppNav from "../../components/Nav/AppNav";
import {NAV} from "../../constants/appConstants";
import Disclaimer from "../../components/Disclaimer/Disclaimer";


class DefaultLayout extends Component {
  constructor() {
    super();
    this.state = {
      showDisclaimer: !sessionStorage.getItem('disclaimerAgreed')
    };
  }

  onAgree = () => {
    sessionStorage.setItem('disclaimerAgreed', 'true')
    this.setState({
      showDisclaimer: false
    });
  }

  render() {
    const {showDisclaimer} = this.state;
    return (
        <div className="mainContainer">
          {window.location.href.indexOf('localhost') === -1 && showDisclaimer && <Disclaimer onAgree={this.onAgree}/>}
          <AppNav items={NAV}/>
          <div className='flex-grow-1'>
            {this.props.children}
          </div>
          <footer className="j-sb footer">
            <div>
              Copyright {new Date().getFullYear()} M. S. Nagar & Co. / All Photographs © M. S. Nagar & Co.
            </div>
            <div className="socialIcons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </footer>
        </div>
    );
  }
}

DefaultLayout.propTypes = {
  header: PropTypes.bool,
  footer: PropTypes.bool
};
export default DefaultLayout;
