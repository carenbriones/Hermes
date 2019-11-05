import React from "react";
import AuthService from '../../components/AuthService';
import API from '../../utils/API';
import { Link, Redirect } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
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

class Register extends React.Component {
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
        this.props.history.replace('/auth/login');
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
      <div className="register-page">
        <Container>
          <Row>
            <Col className="ml-auto" lg="5" md="5">
              <div className="info-area info-horizontal mt-5">
                <div className="icon icon-primary">
                  <i className="nc-icon nc-tap-01" />
                </div>
                <div className="description">
                  <h5 className="info-title">Track Sessions</h5>
                  <p className="description">
                    Sitting in a room tallying behaviors is outdated. Through our
                    session tracker you can easily record positive behaviors and 
                    leave notes on your mobile device.
                  </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-primary">
                  <i className="nc-icon nc-chart-bar-32" />
                </div>
                <div className="description">
                  <h5 className="info-title">Visualize Progress</h5>
                  <p className="description">
                    Visually see how your child is doing daily, weekly, monthly, with 
                    our aggregated charts from your sessions. 
                  </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-info">
                  <i className="nc-icon nc-cloud-download-93" />
                </div>
                <div className="description">
                  <h5 className="info-title">Access Resources</h5>
                  <p className="description">
                    Looseleaf pamphlets always get lost between the office and your home.
                    Have all those resources easily accessible on your dashboard.
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


                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    type="submit" className="btn btn-info" onClick={this.handleFormSubmit}>
                    Get Started
                </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("assets/img/bg/girl-and-speech-therapist.jpg")})`
          }}
        />
      </div>
    );
  }
}

export default Register;
