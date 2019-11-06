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

class Resources extends Component {

  state = {
    title: "",
    img: "",
    text: [],
    id: "",
    category: ""
  };

  componentDidMount() {
    const href = window.location.href.split("/")
    const { title, img, text, id, category } = resources[href[href.length-1]-1]
    this.setState({ title, img, text, id, category })
  }

  render () {
      
      return (
      <div className="container Profile">
      <Container>
        <Card>
          <CardHeader>
          <strong>Session No. {this.state.id}</strong>
            <CardTitle>
        <h2>{this.state.title}</h2>
        </CardTitle>
        </CardHeader>
        <CardBody>
        <img src={this.state.img}/>
        <br/><br/>
        {this.state.text.map(p => {return <p key={Math.floor(Math.random()*20)}>{p}</p>})}
        
        <Link to="/">Go home</Link>
        
        </CardBody>
      </Card>
      </Container>
      </div>
    )}
}

export default withAuth(Resources);

// 