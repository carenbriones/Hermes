import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import ReactDatetime from "react-datetime";
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
  Col,
} from "reactstrap";
import { parse } from 'url';

class NewSession extends Component {

  state = {
    // new session
    positiveInteractions: 0,
    appropriateRequests: 0,
    appropriateResponse: 0,
    difficultyWith: "",
    successWith: "",
    date: "",

    // Info for Child Card
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    hasIEP: "",
    school: "",
    diagnosis: "",
    therapist: ""
  };

  componentDidMount() {
    API.getOneChild(this.props.match.params.id)
      .then(res => {
        this.setState(res.data)
      })
      .catch(err => console.log(err))


  }

  handleFormSubmit = event => {
    event.preventDefault();
    //console.log(this.props.user.id, this.state);
    console.log("CHILD ID", this.props.match.params.id, "state", this.state)

    API.postNewSession(this.props.match.params.id, 
      {positiveInteractions: this.state.positiveInteractions,
      appropriateRequests: this.state.appropriateRequests,
      appropriateResponse: this.state.appropriateResponse,
      difficultyWith: this.state.difficultyWith,
      successWith: this.state.successWith,
      date: document.getElementById("date").value
      
      })
      .then(res => console.log("DATA SAED!", res.data))
      .catch(err => console.log(err))

    this.setState({
      positiveInteractions: 0,
      appropriateRequests: 0,
      appropriateResponse: 0,
      difficultyWith: "",
      successWith: "",
      date: ""

    })
}

  handleClick = event => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: parseInt(value) + 1
    })
  }

  handleChange = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="content container">

        <Card>
          <Row>
            <Col md="4">
              <img src={require("../../assets/img/childavatar.jpg")}
              />
            </Col>

            <Col md="8">
              <CardBody>
                <CardHeader style={{ paddingLeft: "0px" }}>
                  <CardTitle>
                    <h2>{this.state.firstName} {this.state.lastName}</h2>
                  </CardTitle>
                </CardHeader>
                <Row>
                  <Col md="6">
                    <span style={{ fontSize: "1.1rem" }}><strong>Date of Birth:</strong> {this.state.dateOfBirth.slice(0, 10)}</span><br />
                    <span style={{ fontSize: "1.1rem" }}><strong>Gender:</strong> {this.state.gender}</span><br />
                    <span style={{ fontSize: "1.1rem" }}><strong>Has IEP?</strong>: {this.state.hasIEP ? "Yes" : "No"}</span><br />
                  </Col>
                  <Col md="6">
                    <span style={{ fontSize: "1.1rem" }}><strong>School:</strong> {this.state.school}</span><br />
                    <span style={{ fontSize: "1.1rem" }}><strong>Diagnosis:</strong> {this.state.diagnosis}</span><br />
                    <span style={{ fontSize: "1.1rem" }}><strong>Therapist:</strong> {this.state.therapist}</span><br />
                  </Col>

                  <Col md="12">
                    <hr></hr>
                    <h3 style={{ color: "#51cbce" }}>Session In Progress...</h3>
                  </Col>
                </Row>
              </CardBody>
            </Col>

          </Row>
        </Card>




        {/* ************* SUBMIT SESSION FORM-- MOVE TO THE RIGHT PLACE *************** */}

        <Card className="card-signup  mt-5">
          <CardHeader className="text-center">
            <CardTitle tag="h4">NEW SESSION {this.state.childId}</CardTitle>
            <span><i>Use the form below to keep track of your child's interactions during their therapy session.</i></span>
          </CardHeader>
          <CardBody>
            <hr></hr>
            <Form className="form">
              <Row className="text-center">
                {/* ###########  POSITIVE INTERACTIONS ############## */}
                <Col md="4">
                  <Card>
                    <CardHeader style={{ fontSize: "1.1rem" }}># of Positive Interactions</CardHeader>
                    <CardBody>
                      <h1 style={{
                        marginBlock: "0px",
                        fontSize: "4.5em",
                        color: "#51bcda"
                      }}>{this.state.positiveInteractions}</h1>
                      <Button
                        className="btn-block"
                        color="info"
                        placeholder="Positive Interactions"
                        name="positiveInteractions"
                        id="positiveInteractions"
                        autoComplete="positiveInteractions"
                        value={this.state.positiveInteractions}
                        onClick={this.handleClick}>
                        <i className="nc-icon nc-simple-add" /> Positive Interactions
                  </Button>
                    </CardBody>
                  </Card>


                </Col>
                {/* ###########  APPROPRIATE REQUESTS ############## */}
                <Col md="4">
                  <Card>
                    <CardHeader style={{ fontSize: "1.1rem" }}># of Appropriate Requests</CardHeader>
                    <CardBody>
                      <h1 style={{
                        marginBlock: "0px",
                        fontSize: "4.5em",
                        color: "#51cbce"
                      }}>{this.state.appropriateRequests}</h1>
                      <Button
                        className="btn-block"
                        color="primary"
                        placeholder="Appropriate Requests"
                        name="appropriateRequests"
                        id="appropriateRequests"
                        autoComplete="appropriateRequests"
                        value={this.state.appropriateRequests}
                        onClick={this.handleClick}>
                        <i className="nc-icon nc-simple-add" />Appropriate Requests
                  </Button>
                    </CardBody>
                  </Card>

                </Col>
                {/* ###########  APPROPRIATE RESPONSES ############## */}
                <Col md="4">
                  <Card>
                    <CardHeader style={{ fontSize: "1.1rem" }}># of Appropriate Responses</CardHeader>
                    <CardBody>
                      <h1 style={{
                        marginBlock: "0px",
                        fontSize: "4.5em",
                        color: "#6bd098"
                      }}>{this.state.appropriateResponse}</h1>

                      <Button
                        className="btn-block"
                        color="success"
                        placeholder="Appropriate Responses"
                        name="appropriateResponse"
                        id="appropriateResponse"
                        autoComplete="appropriateResponse"
                        value={this.state.appropriateResponse}
                        onClick={this.handleClick}>
                        <i className="nc-icon nc-simple-add" /> Appropriate Responses
                  </Button>

                    </CardBody>
                  </Card>
                </Col>
              </Row>
              {/* ###########  HAD DIFFICULTY WITH ############## */}
              <label style={{ fontSize: "1rem" }}>My child had difficulty with:</label>
              <FormGroup>
                <Input
                  className="form-control"
                  placeholder="Uses this area to record places where you observered your child having difficulty"
                  name="difficultyWith"
                  type="textarea"
                  id="difficultyWith"
                  autoComplete="difficultyWith"
                  onChange={this.handleChange} />
              </FormGroup>


              {/* ###########  HAD SUCCESS WITH ############## */}
              <label style={{ fontSize: "1rem" }}>My child had SUCCESS with:</label>
              <FormGroup>
                <Input
                  className="form-control"
                  placeholder="Uses this area to record places your child's accomplishments today"
                  name="successWith"
                  type="textarea"
                  id="successWith"
                  autoComplete="successWith"
                  onChange={this.handleChange} />
              </FormGroup>

              {/* ###########  SESSION'S DATE ############## */}
              <label style={{ fontSize: "1rem" }}>Session Date:</label>
              <FormGroup>
                <ReactDatetime
                inputProps={{
                  className:"form-control",
                  name:"date",
                  id:"date",
                  autoComplete:"date"
                  
                }}
                  timeFormat={false}
                  // onChange={this.handleChange} 
                  />
              </FormGroup>

            </Form>
          </CardBody>
          <CardFooter>

            <Button
              type="submit" className="btn btn-primary btn-block" onClick={this.handleFormSubmit}>
              End & Submit Session
                </Button>
          </CardFooter>
        </Card>

      </div>
    )
  }
}

export default NewSession;