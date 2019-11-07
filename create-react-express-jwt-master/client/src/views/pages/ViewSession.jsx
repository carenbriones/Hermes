import React, { Component } from 'react';
import withAuth from '../../components/withAuth';
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

class ViewSession extends Component {

  state = {
    // new session
    positiveInteractions: 0,
    appropriateRequests: 0,
    appropriateResponse: 0,
    difficultyWith: "",
    successWith: "",
    date: "",
    notes: "",
    alert: null
  };

  componentDidMount() {
    API.getOneSession(this.props.match.params.id)
      .then(res => {
        this.setState(res.data)
      })
      .catch(err => console.log(err))
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

  handleFormSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="content container">

        <Card className="card-signup  mt-5">
          <CardHeader className="text-center">
            <CardTitle tag="h4">SESSION ON {this.state.date.slice(0, 10)}</CardTitle>
          </CardHeader>
          <CardBody>
            <hr></hr>
            <Form className="form">
              <Row className="text-center">
                {/* ###########  POSITIVE INTERACTIONS ############## */}
                <Col md="4">
                  <Card>
                    <CardHeader style={{ fontSize: "1rem" }}>Positive Interactions</CardHeader>
                    <CardBody>
                      <h1 style={{
                        marginBlock: "0px",
                        fontSize: "4.5em",
                        color: "#51bcda"
                      }}>{this.state.positiveInteractions}</h1>
                    </CardBody>
                  </Card>


                </Col>
                {/* ###########  APPROPRIATE REQUESTS ############## */}
                <Col md="4">
                  <Card>
                    <CardHeader style={{ fontSize: "1rem" }}>Appropriate Requests</CardHeader>
                    <CardBody>
                      <h1 style={{
                        marginBlock: "0px",
                        fontSize: "4.5em",
                        color: "#51cbce"
                      }}>{this.state.appropriateRequests}</h1>
                    </CardBody>
                  </Card>

                </Col>
                {/* ###########  APPROPRIATE RESPONSES ############## */}
                <Col md="4">
                  <Card>
                    <CardHeader style={{ fontSize: "1rem" }}>Appropriate Responses</CardHeader>
                    <CardBody>
                      <h1 style={{
                        marginBlock: "0px",
                        fontSize: "4.5em",
                        color: "#6bd098"
                      }}>{this.state.appropriateResponse}</h1>

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
                  value={this.state.difficultyWith}
                  disabled/>
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
                  value={this.state.successWith}
                  disabled/>
              </FormGroup>

              <label style={{ fontSize: "1rem" }}>NOTES:</label>
              <FormGroup>
                <Input
                  className="form-control"
                  placeholder="Use this area to record any notes you may have for a therapist"
                  name="nots"
                  type="textarea"
                  id="notes"
                  autoComplete="notes"
                  value={this.state.notes}
                  />
              </FormGroup>

            </Form>
          </CardBody>
          <CardFooter>

            <Button
              type="submit" className="btn btn-primary btn-block" onClick={this.inputAlert}>
              Add Note
            </Button>
          </CardFooter>
        </Card>

      </div>
    )
  }
}

export default withAuth(ViewSession);