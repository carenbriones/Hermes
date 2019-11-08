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
