import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
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

class Profile extends Component {

  state = {
    name: "",
    role: "",
    email: "",
    address: "",
    phoneNumber: "",
    children: []
  };

  componentDidMount() {
    console.log(this.props.user)
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        name: res.data.name,
        role: res.data.role,
        email: res.data.email,
        address: res.data.address,
        phoneNumber: res.data.phoneNumber,
        children: res.data.children
      })
    });
  };

  // handleStartSession = event => {
  //   event.preventDefault();
  //   const {name, value} = event.target
  //   console.log(event.target)

  // }

  // **********SUBMIT NEW CHILD*******************
  handleFormSubmit = event => {
    event.preventDefault();

    console.log(event.target, this.state);
    // API.postNewSession(
    //   this.props.user.id, 
    //   { 
    //     firstName: this.state.firstName, 
    //     lastName: this.state.lastName, 
    //     dateOfBirth: this.state.dateOfBirth, 
    //     gender: "M", 
    //     hasIEP: this.state.hasIEP,
    //     school: this.state.school,
    //     diagnosis: this.state.diagnosis,
    //     therapist: this.state.therapist
    //   })
    //   .then(res => {
    //     console.log("data saved", res.data)
    //     res.json(res)
    //   })
    //   .catch(err => alert(err));

    this.setState({
      positiveInteractions: 0,
      appropriateRequests: 0,
      appropriateResponse: 0,
      difficultyWith: "",
      successWith: "",
      date: ""
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
      <div className="container Profile">
        <h1>{this.state.name}</h1>
        <p>Role: {this.state.role}</p>
        <p>Email: {this.state.email}</p>
        <p>Address: {this.state.address}</p>
        <p>Phone Number: {this.state.phoneNumber}</p>
        <Link to={'/addChild/' + this.props.user.id} >
            <Button name="_id" type="submit">
                Add Child
            </Button>
        </Link>

        <h2>Children:</h2>
        <ul>
          {this.state.children.map(child => {
          return (
            <li key={child._id}>{child.firstName} {child.lastName}    
            <Link to={'/newSession/' + child._id} >
              <Button name="_id" value={child._id} type="submit" onClick={this.handleStartSession}>
                 Start
              </Button>
            </Link>
              
              </li>
                  )
          })}
        </ul>
        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default withAuth(Profile);

// 