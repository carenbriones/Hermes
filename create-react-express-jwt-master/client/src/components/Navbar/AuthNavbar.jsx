import React, {Component} from "react";
import classnames from "classnames";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container
} from "reactstrap";

class AuthNavbar extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
    
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  toggleCollapse = () => {
    let newState = {
      collapseOpen: !this.state.collapseOpen
    };
    if (!this.state.collapseOpen) {
      newState["color"] = "bg-white";
    } else {
      newState["color"] = "navbar-transparent";
    }
    this.setState(newState);
  };

  showNavigation = () => {
    if (this.Auth.loggedIn()) {
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/profile"><i className="nc-icon nc-single-02" />Profile</Link>
                </li>
                <li className="nav-item">
                    {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                    <a className="nav-link" href="/" onClick={() => this.Auth.logout()}><i className="nc-icon nc-simple-remove" />Logout</a>
                </li>
            </ul>
        );
    } else {
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login"><i className="nc-icon nc-single-02" />Login</Link>
                </li>
            </ul>
        );
    }
};



  render() {
    return (
      <Navbar
        className={classnames("navbar-absolute fixed-top", this.state.color)}
        expand="lg"
      >
        <Container className="mb-5">
          <div className="navbar-wrapper">
            <NavbarBrand href="/login" onClick={e => e.preventDefault()}>
              Hermes Tracker
            </NavbarBrand>
          </div>
          <button
            aria-controls="navigation-index"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-toggle="collapse"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <Collapse
            isOpen={this.state.collapseOpen}
            className="justify-content-end"
            navbar
          >
            <Nav navbar>
            {this.showNavigation()}

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default AuthNavbar;
