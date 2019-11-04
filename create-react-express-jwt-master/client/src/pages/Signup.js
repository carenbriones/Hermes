import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from './../components/AuthService';
import API from './../utils/API';
import AuthNavbar from './../components/Navbar/AuthNavbar';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  // eslint-disable-next-line
  Label,
  // eslint-disable-next-line
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentDidMount() {
    document.body.classList.toggle("register-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.name, this.state.email, this.state.password, this.state.address, this.state.phoneNumber)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        this.props.history.replace('/login');
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    // go to home page after signup
    if (this.Auth.loggedIn()) {
      return <Redirect to="/" />
    }
    return (
      <div className="register-page"
      style={{
        backgroundImage: `url(${require("../assets/img/bg/child-and-speech-therapist.jpg")})`,
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "block",
        top: "0",
        left: "0",
        backgroundSize: "cover",
        backgroundPosition: "center top"
      }}>
        <AuthNavbar />
        <Container>
          <Row className="mt-5">
            <Col className="ml-auto" lg="5" md="5" style={{ zIndex: 1 }}>
              <div className="info-area info-horizontal mt-5">
                <div className="icon icon-primary" style={{ marginTop: "0px" }}>
                  <i className="nc-icon nc-chat-33" />
                </div>
                <div className="description" style={{ color: "#fff" }}>
                  <h5 className="info-title">Track Sessions</h5>
                  <p className="description" style={{ color: "#fff" }}>
                    No more binders of loose papers, and missing pens. The Hermes Tracker
                    allows you to track your child's interactions with a click of a
                    button.
                </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-primary" style={{ marginTop: "0px" }}>
                  <i className="nc-icon nc-chart-bar-32" />
                </div>
                <div className="description" style={{ color: "#fff" }}>
                  <h5 className="info-title">Visualize Progress</h5>
                  <p className="description" style={{ color: "#fff" }}>
                    Record your data and access your dashboard to see their success
                    and growth over days, weeks, months.
                </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-info" style={{ marginTop: "0px" }}>
                  <i className="nc-icon nc-book-bookmark" />
                </div>
                <div className="description" style={{ color: "#fff" }}>
                  <h5 className="info-title">Access Resources</h5>
                  <p className="description" style={{ color: "#fff" }}>
                    Loose leaf handouts can be a pain to keep track of. Our resource
                    section makes it easy to find those at home activities.
                </p>
                </div>
              </div>
            </Col>
            <Col className="mr-auto" lg="4" md="6">
              <Card className="card-signup text-center mt-5" style={{ zIndex: 1 }}>
                <CardHeader>
                  <CardTitle tag="h4">Register</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form">

                    {/* ###########  Name Field ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="Full Name..."
                        name="name"
                        type="text"
                        id="name"
                        autoComplete="name"
                        onChange={this.handleChange} />
                    </InputGroup>

                    {/* ###########  Address Field ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-globe" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="Address..."
                        name="address"
                        type="text"
                        id="address"
                        autoComplete="address"
                        onChange={this.handleChange} />
                    </InputGroup>

                    {/* ###########  Phone Number Field ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-mobile" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="Phone #..."
                        name="phoneNumber"
                        type="text"
                        id="phoneNumber"
                        autoComplete="phoneNumber"
                        onChange={this.handleChange} />
                    </InputGroup>

                    {/* ###########  Email Field ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="Email..."
                        name="email"
                        type="email"
                        id="email"
                        autoComplete="email"
                        onChange={this.handleChange} />
                    </InputGroup>

                    {/* ###########  Set Password Field ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="Set Password..."
                        name="password"
                        type="password"
                        id="pwd"
                        autoComplete="new-password"
                        onChange={this.handleChange} />
                    </InputGroup>

                    {/* <FormGroup check className="text-left">
                    <Label check>
                      <Input defaultChecked type="checkbox" />
                      <span className="form-check-sign" />I agree to the{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup> */}

                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    type="submit" className="btn btn-primary" onClick={this.handleFormSubmit} style={{
                      backgroundColor: "#51bcda !important"
                    }}>
                    Get Started
                </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("../assets/img/bg/child-and-speech-therapist.jpg")})`,
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "block",
            top: "0",
            left: "0",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        />
      </div> */}
      </div>
    );
  }
}

export default Signup;