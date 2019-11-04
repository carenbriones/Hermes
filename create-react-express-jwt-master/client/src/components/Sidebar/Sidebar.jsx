import React, {Component} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,MDBSideNavNav, MDBSideNav } from "mdbreact";
import AuthService from '../AuthService';


const Auth = new AuthService();

class DoubleNavigationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: false,
      breakWidth: 1300,
      windowWidth: 0
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    });

  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  };

  handleLogout = () => {
    Auth.logout();
    this.props.history.replace('/signup');
  };

  render() {
    const navStyle = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
    };

    // const mainStyle = {
    //   margin: "0 6%",
    //   paddingTop: "5.5rem",
    //   paddingLeft:
    //     this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
    // };

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    return (
      <Router>
        <div className="fixed-sn light-blue-skin">
          <MDBSideNav className="test"
            logo="https://i.ibb.co/dcqbX4w/Hermes-Logo.png"
            triggerOpening={this.state.toggleStateA}
            breakWidth={this.state.breakWidth}
            bg="https://i.ibb.co/yVq68GR/Sidebar-BG.png"
            mask="strong"
            fixed
          >

            <MDBSideNavNav>

            <MDBNavItem>
              <MDBNavLink to="#!" style={{
                  color: "#ffffff !important",
                  height: "36px",
                  fontSize: "1rem",
                  fontWeight: "300",
                  lineHeight: "22px",
                  paddingLeft: "23px"
              }}><i className="nc-icon nc-circle-10" />  Children</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" style={{
                  color: "#ffffff !important",
                  height: "36px",
                  fontSize: "1rem",
                  fontWeight: "300",
                  lineHeight: "22px",
                  paddingLeft: "23px"
              }}><i className="nc-icon nc-circle-10" />  Therapist Directory</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" style={{
                  color: "#ffffff !important",
                  height: "36px",
                  fontSize: "1rem",
                  fontWeight: "300",
                  lineHeight: "22px",
                  paddingLeft: "23px"
              }}><i className="nc-icon nc-circle-10" />  Resources</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="#!" style={{
                  color: "#ffffff !important",
                  height: "36px",
                  fontSize: "1rem",
                  fontWeight: "300",
                  lineHeight: "22px",
                  paddingLeft: "23px"
              }}><i className="nc-icon nc-circle-10" />  Something Else</MDBNavLink>
            </MDBNavItem>

            </MDBSideNavNav>

          </MDBSideNav>

          <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
            <MDBNavbarNav left>
              <MDBNavItem>
                <div
                  onClick={this.handleToggleClickA}
                  key="sideNavToggleA"
                  style={{
                    lineHeight: "32px",
                    marginRight: "1em",
                    verticalAlign: "middle"
                  }}
                >
                  <MDBIcon icon="bars" color="white" size="2x" />
                </div>
              </MDBNavItem>
              <MDBNavItem className="d-none d-md-inline" style={{ paddingTop: 5 }}>
                HERMES TRACKER
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right style={specialCaseNavbarStyles}>
            
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline"><i className="nc-icon nc-circle-10" />{" "}Account</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right>
                    <MDBDropdownItem href="/profile">Profile</MDBDropdownItem>
                    <MDBDropdownItem onClick={this.handleLogout}>Logout</MDBDropdownItem>
                   
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
        </div>
      </Router>
    );
  }
}

export default DoubleNavigationPage;