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

class AddChild extends Component {

  state = {
    // new child
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    hasIEP: false,
    school: "",
    diagnosis: "",
    therapist: "",
    _id: ""
  };

  componentDidMount() {
    this.setState({
      _id: this.props.user.id
    })
    console.log(this.props);
    // console.log(this.props);
  }

  handleFormSubmit = event => {
    event.preventDefault();

    // console.log(this.state)

    API.postNewChild(this.state._id, 
      { 
        firstName: this.state.firstName, 
        lastName: this.state.lastName, 
        dateOfBirth: this.state.dateOfBirth, 
        gender: this.state.gender, 
        hasIEP: this.state.hasIEP,
        school: this.state.school,
        diagnosis: this.state.diagnosis,
        therapist: this.state.therapist
      })
      .then(res => {
        console.log("data saved", res.data)
        this.props.history.replace("/admin/user-profile")
      })
      .catch(err => alert(err));

    this.setState({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      hasIEP: false,
      school: "",
      diagnosis: "",
      therapist: ""
    })
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="Profile">
        <Container fluid>
          {/* ************* SUBMIT CHILD FORM *************** */}
          <Row>
            <Col className="mx-5">
              <Card className="card-signup text-center mt-5" style={{ zIndex: 1 }}>
                <CardHeader>
                  <CardTitle tag="h4">Add a Child</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form">

                    {/* ###########  First Name Field ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        type="text"
                        id="firstName"
                        autoComplete="firstName"
                        onChange={this.handleChange} />
                    </InputGroup>

                    {/* ###########  Last Name Field ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="Last Name"
                        name="lastName"
                        type="text"
                        id="lastName"
                        autoComplete="lastName"
                        onChange={this.handleChange} />
                    </InputGroup>

                    {/* ###########  Date of Birth ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-calendar-06" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="Date of Birth"
                        name="dateOfBirth"
                        type="date"
                        id="dateOfBirth"
                        autoComplete="dateOfBirth"
                        onChange={this.handleChange} />
                    </InputGroup>

                    {/* ########### GENDER ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <Input
                            addon type="radio"
                            aria-label="M"
                            name="gender"
                            value="M"
                            checked={this.state.gender === "M"}
                            onChange={this.handleChange}
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="M" />
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <Input
                            addon type="radio"
                            aria-label="F"
                            name="gender"
                            value="F"
                            checked={this.state.gender === "F"}
                            onChange={this.handleChange}
                            />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="F" />
                    </InputGroup>

                    {/* ###########  HAS IEP ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <Input addon type="checkbox" aria-label="Checkbox for following text input" name="hasIEP"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Has IEP" />
                    </InputGroup>

                    {/* ###########  SCHOOL FIELD ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="School"
                        name="school"
                        type="text"
                        id="school"
                        autoComplete="school"
                        onChange={this.handleChange} />
                    </InputGroup>

                    {/* ###########  DIAGNOSIS FIELD ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="Diagnosis"
                        name="diagnosis"
                        type="text"
                        id="diagnosis"
                        autoComplete="diagnosis"
                        onChange={this.handleChange} />
                    </InputGroup>

                    {/* ###########  THERAPIST FIELD ############## */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control"
                        placeholder="Therapist"
                        name="therapist"
                        type="text"
                        id="therapist"
                        autoComplete="therapist"
                        onChange={this.handleChange} />
                    </InputGroup>

                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>
                    Add Child
                </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    )
  }
}

export default withAuth(AddChild);