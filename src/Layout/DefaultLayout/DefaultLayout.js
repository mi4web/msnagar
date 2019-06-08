import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactWOW from 'react-wow'
import "./DefaultLayout.scss";
import NavBar from "../../components/Nav/NavBar";
import {NAV} from "../../constants/appConstants";
import Hamburger from "../../components/Hamburger/Hamburger";
import Disclaimer from "../../components/Disclaimer/Disclaimer";


class DefaultLayout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const tncAgreed = localStorage.getItem("tncAgreed");
    if (!tncAgreed) {
      this.setState({
        showDisclaimer: true
      });
    }
  }

  onAgree = () => {
    localStorage.setItem("tncAgreed", true);
    this.setState({
      showDisclaimer: false
    });
  }

  render() {
    const {showDisclaimer} = this.state;
    return (
        <div className="mainContainer">
          {showDisclaimer && <Disclaimer onAgree={this.onAgree}/>}
          <div className="flex-row j-sb a-c deskTopNav">
            <div className="brandWrapper">
              <div className="brandName">M. S. Nagar & Co.</div>
              <div className="title">Advocates and Solicitors</div>
            </div>
            <NavBar items={NAV}/>

          </div>
          <Hamburger/>
          {this.props.children}
          <footer className="flex-row j-sb footer">
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
