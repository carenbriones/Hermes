import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from '../../utils/API';
import ReactDatetime from "react-datetime";
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
  Row,
  Col
} from "reactstrap";


class AddChild extends Component {

  state = {
    // new child
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    hasIEP: "",
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
        dateOfBirth: document.getElementById("dateOfBirth").value,
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
      hasIEP: "",
      school: "",
      diagnosis: "",
      therapist: ""
    })
    console.log(this.state)
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
      
        <div className="content container">
          {/* ************* SUBMIT CHILD FORM *************** */}
          <Row>
            <Col>
            

              <Card>
                <CardHeader>
                  <CardTitle tag="h4" className="text-center">Add A New Child</CardTitle>
                </CardHeader>
                <CardBody>

                  <Form action="#" method="#">

                    {/* ########### FIRST AND LAST NAME ############ */}
                    <Row>
                      <Col>
                        <label>First Name</label>
                        <FormGroup>
                          <Input
                            className="form-control"
                            placeholder="Sam / Samantha"
                            name="firstName"
                            type="text"
                            id="firstName"
                            autoComplete="firstName"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>

                      <Col>
                        <label>Last Name</label>
                        <FormGroup>
                          <Input
                            className="form-control"
                            placeholder="Smith"
                            name="lastName"
                            type="text"
                            id="lastName"
                            autoComplete="lastName"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    {/* ########### BIRTHDATE * GENDER * IEP ############ */}
                    <Row>
                      <Col md="6">
                        <label>Date of Birth</label>
                        <FormGroup>
                          <ReactDatetime
                            inputProps={{
                              className: "form-control",
                              placeholder: "Click to Select D.O.B",
                              name: "dateOfBirth",
                              id: "dateOfBirth",
                              autoComplete: "dateOfBirth",
                              
                            }}
                            
                            timeFormat={false}
                            // onChange={this.handleChange}
                          />

                        </FormGroup>
                      </Col>

                      <Col md="3">
                        <label>Gender</label>
                        <FormGroup>
                          <div className="form-check-radio form-check-inline">
                            <Label check>
                              <Input
                                
                  
                                id="M"
                                type="radio"
                                name="gender"
                                // checked={this.state.gender = "Male"}
                                onChange={this.handleChange}
                                value="Male" />
                              Male
                             <span className="form-check-sign"></span>
                            </Label>
                          </div>

                          <div className="form-check-radio form-check-inline">
                          <Label check>
                              <Input
                                
                                id="F"
                                type="radio"
                                name="gender"
                                // checked={this.state.gender = "Female"}
                                onChange={this.handleChange}
                                value="Female" />
                              Female
                           <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </FormGroup>
                      </Col>
                      

                      <Col md="3">
                        <label>Does Your Child Have An IEP?</label>
                        <FormGroup>
                          <div className="form-check-radio form-check-inline">
                            <Label check>
                              <Input
                                
                                
                                id="true"
                                type="radio"
                                name="hasIEP"
                                // checked={this.state.hasIEP === true}
                                onChange={this.handleChange}
                                value="true" />
                              Yes
                             <span className="form-check-sign"></span>
                            </Label>
                          </div>

                          <div className="form-check-radio form-check-inline">
                          <Label check>
                              <Input
                                
                                id="false"
                                type="radio"
                                name="hasIEP"
                                // checked={this.state.hasIEP === false}
                                onChange={this.handleChange}
                                value="false" />
                              No
                           <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </FormGroup>
                      </Col>

          
                    </Row>

                     {/* ########### School ############ */}
                     <Row>
                      <Col>
                        <label>What School Does Your Child Attend</label>
                        <FormGroup>
                          <Input
                            className="form-control"
                            placeholder="School"
                            name="school"
                            type="text"
                            id="school"
                            autoComplete="school"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                     {/* ########### Diagnosis ############ */}
                     <Row>
                      <Col>
                        <label>What Is You Child's Diagnosis?</label>
                        <FormGroup>
                          <Input
                           className="form-control"
                           placeholder="Diagnosis"
                           name="diagnosis"
                           type="text"
                           id="diagnosis"
                           autoComplete="diagnosis"
                           onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                     {/* ########### Therapist ############ */}
                     <Row>
                      <Col>
                        <label>Who Is Your Primary Child's Therapist?</label>
                        <FormGroup>
                          <Input
                           className="form-control"
                           placeholder="Therapist"
                           name="therapist"
                           type="text"
                           id="therapist"
                           autoComplete="therapist"
                           onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                  </Form>

                </CardBody>
                <CardFooter>
                <Button
                    type="submit" className="btn btn-primary btn-block" onClick={this.handleFormSubmit}>
                    Add Child
                </Button>
                </CardFooter>
              </Card>


            </Col>
          </Row>

          </div>
    )
  }
}

export default withAuth(AddChild);