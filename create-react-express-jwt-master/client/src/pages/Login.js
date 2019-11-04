import React, { Component } from 'react';
import AuthService from './../components/AuthService';
import { Redirect } from 'react-router-dom';
import AuthNavbar from './../components/Navbar/AuthNavbar';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  // eslint-disable-next-line
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";


class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/profile`);
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    if (this.Auth.loggedIn()) {
      return <Redirect to="/dashboard" />
    }
    return (
      <div className="login-page">
        <AuthNavbar />
        <Container>
          <Row className="mt-5">
            <Col className="ml-auto mr-auto mt-5" lg="4" md="6">
              <Form className="form">
                <Card className="card-login">
                  <CardHeader>
                    <CardHeader>
                      <h3 className="header text-center">Login</h3>
                    </CardHeader>
                  </CardHeader>
                  <CardBody>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email..."
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        id="pwd"
                        autoComplete="current-password"
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                    <br />
                    <FormGroup />
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      className="btn-round mb-3"
                      color="primary"
                      type="submit"
                      onClick={this.handleFormSubmit}
                    >
                      LOGIN
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
        <div
          className="full-page-background"
          style={{
            background: `url(${require("../assets/img/bg/learning-can-be-real-fun.jpg")})`,
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
      </div>
    );
  }

}

export default Login;