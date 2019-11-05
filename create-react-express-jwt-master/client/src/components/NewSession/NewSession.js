import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
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
    _id: ""
  };

  componentDidMount() {
    this.setState({
      _id: this.props.match.params.id
    })
  }

  //WE NEED TO FIGURE OUT HOW TO PASS THE CHILD'S ID
  handleFormSubmit = event => {
    event.preventDefault();
    //console.log(this.props.user.id, this.state);
    console.log("CHILD ID", this.props.match.params.id, "state", this.state)

    API.postNewSession(this.props.match.params.id, this.state)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    this.setState({
      positiveInteractions: 0,
      appropriateRequests: 0,
      appropriateResponse: 0,
      difficultyWith: "",
      successWith: "",
      date: ""
    })
  };

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
      <div className="container Profile">

        <Container>

          {/* ************* SUBMIT SESSION FORM-- MOVE TO THE RIGHT PLACE *************** */}
          <Row>
            <Col className="mr-auto" lg="4" md="6">
              <Card className="card-signup text-center mt-5" style={{ zIndex: 1 }}>
                <CardHeader>
                  <CardTitle tag="h4">NEW SESSION {this.state.childId}</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form">

                    {/* ###########  POSITIVE INTERACTIONS ############## */}
                    <InputGroup>

                      <Button
                        className="form-control"
                        placeholder="Positive Interactions"
                        name="positiveInteractions"
                        id="positiveInteractions"
                        autoComplete="positiveInteractions"
                        value={this.state.positiveInteractions}
                        onClick={this.handleClick}>
                        {this.state.positiveInteractions} Positive Interactions
                    </Button>

                    </InputGroup>

                    {/* ###########  APPROPRIATE REQUESTS ############## */}
                    <InputGroup>

                      <Button
                        className="form-control"
                        placeholder="Appropriate Requests"
                        name="appropriateRequests"
                        id="appropriateRequests"
                        autoComplete="appropriateRequests"
                        value={this.state.appropriateRequests}
                        onClick={this.handleClick}>
                        {this.state.appropriateRequests} Appropriate Requests
                    </Button>

                    </InputGroup>

                    {/* ###########  APPROPRIATE RESPONSES ############## */}
                    <InputGroup>

                      <Button
                        className="form-control"
                        placeholder="Appropriate Responses"
                        name="appropriateResponse"
                        id="appropriateResponse"
                        autoComplete="appropriateResponse"
                        value={this.state.appropriateResponse}
                        onClick={this.handleClick}>
                        {this.state.appropriateResponse} Appropriate Responses
            </Button>

                    </InputGroup>

                    {/* ###########  HAD DIFFICULTY WITH ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="My child had difficulty with"
                        name="difficultyWith"
                        type="text"
                        id="difficultyWith"
                        autoComplete="difficultyWith"
                        onChange={this.handleChange} />
                    </InputGroup>

                    {/* ###########  HAD SUCCESS WITH ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="My child had success with"
                        name="successWith"
                        type="text"
                        id="successWith"
                        autoComplete="successWith"
                        onChange={this.handleChange} />
                    </InputGroup>

                    {/* ###########  SESSION'S DATE ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-calendar-06" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="Date of Birth"
                        name="date"
                        type="date"
                        id="date"
                        autoComplete="date"
                        onChange={this.handleChange} />
                    </InputGroup>

                  </Form>
                </CardBody>
                <CardFooter>
                  
                    <Button
                    type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>
                    End Session</Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>

        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default NewSession;