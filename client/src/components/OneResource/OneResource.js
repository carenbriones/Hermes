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
  CardImg,
  CardText,
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

class OneResource extends Component {

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
      <div className="content container">

        <Row>
          <Col>
            <Card>
              <CardImg top src={this.state.img} alt={this.state.title} style={{
                maxHeight: "300px",
                width: "100%",
                objectFit: "cover"
                }}>
              </CardImg>

              <CardBody>
                <CardTitle><h2 style={{marginBottom:"0px"}}>{this.state.title}</h2>
                  <strong className="text-muted">{this.state.category}</strong>
                </CardTitle>
                <CardText> {this.state.text.map(p => {return <p key={Math.floor(Math.random()*20)}>{p}</p>})}</CardText>
       
                <Link to="/admin/resources">Back to Resources</Link>
              </CardBody>

            </Card>
          </Col>
        </Row>
      </div>
    )}
}

export default withAuth(OneResource);
