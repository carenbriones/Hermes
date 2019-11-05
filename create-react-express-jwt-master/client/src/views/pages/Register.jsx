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
                  <i className="nc-icon nc-tv-2" />
                </div>
                <div className="description">
                  <h5 className="info-title">Marketing</h5>
                  <p className="description">
                    We've created the marketing campaign of the website. It was
                    a very interesting collaboration.
                  </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-primary">
                  <i className="nc-icon nc-html5" />
                </div>
                <div className="description">
                  <h5 className="info-title">Fully Coded in HTML5</h5>
                  <p className="description">
                    We've developed the website with HTML5 and CSS3. The client
                    has access to the code using GitHub.
                  </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-info">
                  <i className="nc-icon nc-atom" />
                </div>
                <div className="description">
                  <h5 className="info-title">Built Audience</h5>
                  <p className="description">
                    There is also a Fully Customizable CMS Admin Dashboard for
                    this product.
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
                    type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>
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
            backgroundImage: `url(${require("assets/img/bg/jan-sendereks.jpg")})`
          }}
        />
      </div>
    );
  }
}

export default Register;
