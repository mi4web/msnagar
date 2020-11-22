import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './AppNav.scss';
import { BRAND_NAME } from "../../constants/appConstants";
import { getPathByName } from "../../routes/routerManager";

console.log('Navbar', Navbar,);
console.log('Nav', Nav,);
class AppNav extends Component {
  render() {
    const { items, location: { path } } = this.props;
    return (
      <div className="navigation">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <div className='text-brand'>{BRAND_NAME}</div>
            <div className='text-medium text-secondary'>Advocates and Solicitors</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {items.map((item, index) => {
                return (
                  <Nav.Link href="#home" key={index}>
                    <NavLink to={getPathByName(item.route)} activeClassName="active" key={index} exact>
                      <span>{item.text}</span>
                    </NavLink>
                  </Nav.Link>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(AppNav);
