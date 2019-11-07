import React, { Component } from 'react';
import withAuth from './../withAuth';
import API from './../../utils/API';
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
import resources from "./../../resources.json"
import { throwStatement } from '@babel/types';

import SessionTable from "../../views/tables/SessionTable";

class ChildPage extends Component {

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
            .then(() => {
                const { title, img, text, id, category } = resources[this.state.sessions.length]
                this.setState({ title, img, text, id, category })
            })
            .catch(err => console.log(err))


    }

    render() {
        return (
            <div className="content">
                <Container>

                    {/* ############# CHILD INFO CARD ################ */}
                    <Card>
                        <Row>
                            <Col md="4">
                                <img src={require("../../assets/img/childavatar.jpg")}
                                />
                            </Col>

                            <Col md="8">
                                <CardBody>
                                    <CardHeader style={{paddingLeft: "0px"}}>
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
                                            <h4>Is There A Therapy Session Today?</h4>
                                            <Button className="btn-block btn-primary" href={`../newSession/${this.state._id}`} name="_id" value={this.state._id} size="lg">
                                                Open Session Tracker
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Col>

                        </Row>
                    </Card>



                    {/* ############# CHILD PRORGRESS CHART ################ */}
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


                     {/* ############# CHILD SESSION HISTORY ################ */}
                    <SessionTable />


                     {/* ############# RESOURCES ################ */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <h2>{this.state.title}</h2>
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <img src={this.state.img} />
                            <br /><br />
                            {this.state.text.map(p => { return <p key={Math.floor(Math.random() * 20)}>{p}</p> })}
                        </CardBody>
                    </Card>
                   

                </Container>
            </div>
        )
    }
}

export default withAuth(ChildPage);