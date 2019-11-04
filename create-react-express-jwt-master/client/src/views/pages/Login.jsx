import React from "react";
import AuthService from '../../components/AuthService';
import { Link, Redirect } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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

class Login extends React.Component {
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
        this.props.history.replace(`/admin/user-profile`);
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
    return (
      <div className="login-page">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form action="" className="form" method="">
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
                    {/* <FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            defaultChecked
                            defaultValue=""
                            type="checkbox"
                          />
                          <span className="form-check-sign" />
                          Subscribe to newsletter
                        </Label>
                      </FormGroup>
                    </FormGroup> */}
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      className="btn-round mb-3"
                      color="warning"
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
            backgroundImage: `url(${require("assets/img/bg/fabio-mangione.jpg")})`
          }}
        />
      </div>
    );
  }
}

export default Login;