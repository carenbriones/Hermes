import React, { Component } from 'react';
import withAuth from './../withAuth';
import API from './../../utils/API';
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
import resources from "./../../resources.json"
import { throwStatement } from '@babel/types';

class ChildPage extends Component {

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
    sessions: [],
    _id: "",
    title: "",
    img: "",
    text: [],
    id: "",
    category: ""
  };

  componentDidMount() {
    API.getOneChild(this.props.match.params.id)
      .then(res => { 
        this.setState(res.data)
      })
      .then( () => {
        const { title, img, text, id, category } = resources[this.state.sessions.length]
        this.setState({ title, img, text, id, category })
      })
      .catch(err => console.log(err))

    
  }

  render () {
      return (
      <div className="content">
      <Container>
          <Row>
            <Col className="col-md-12">
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        </Col>
        </Row>
        <Row>
          <Col className="col-md-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <h5>Child's Info.</h5>
            </CardTitle>
          </CardHeader>
          <CardBody>
        <p><strong>Date of Birth:</strong> {this.state.dateOfBirth.slice(0, 10)}</p>
        <p><strong>Gender:</strong> {this.state.gender}</p>
        <p><strong>Has IEP?</strong>: {this.state.hasIEP ? "Yes" : "No" }</p>
        <p><strong>School:</strong> {this.state.school}</p>
        <p><strong>Diagnosis:</strong> {this.state.diagnosis}</p>
        <p><strong>Therapist:</strong> {this.state.therapist}</p>
        
        </CardBody>
        </Card>
        </Col>
        <Col className="col-md-8">
          <Card>
            <CardHeader>
              <CardTitle>
                <h5>
                Child's progress:
                </h5>
              </CardTitle>
            </CardHeader>
            <CardBody>

            </CardBody>
          </Card>
        </Col>
        </Row>
        <h5>Today's Session:
          <Button href={`../newSession/${this.state._id}`} name="_id" value={this.state._id}>
            Start
          </Button>
        </h5>
        <Card>
          <CardHeader>
            <CardTitle>
        <h2>{this.state.title}</h2>
        </CardTitle>
        </CardHeader>
        <CardBody>
        <img src={this.state.img}/>
        <br/><br/>
        {this.state.text.map(p => {return <p key={Math.floor(Math.random()*20)}>{p}</p>})}
        
        </CardBody>
      </Card>
      </Container>
      </div>
    )}
}

export default withAuth(ChildPage);
