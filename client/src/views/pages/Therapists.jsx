import React, { Component } from 'react';
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
import therapists from "./../../therapists.json"
import { throwStatement } from '@babel/types';

import SessionTable from "../../views/tables/SessionTable";

function Therapists () {

        return (
            <div className="content">
                <Container>
                    {/* ############# THERAPIST INFO CARD ################ */}
                        <h2>Meet the Therapists! <i className="nc-icon nc-favourite-28"></i></h2>
                        {therapists.map(therapist => 
                        { return (
                            <Card>
                                <CardBody>
                                    <Row key={Math.floor(Math.random() * 20)}>
                                        <Col md="2">
                                            <img src={therapist.img}/>
                                        </Col>
                                        <Col md="7">
                                            <h6 className="text-primary"> {therapist.name}, {therapist.title}. <i className="nc-icon nc-badge"></i></h6>
                                            <p ><i className="nc-icon nc-mobile"> </i> <strong>Number: </strong> {therapist.phoneNumber}</p>
                                            <p ><i className="nc-icon nc-email-85"></i> <strong>Email: </strong> {therapist.email}</p>
                                            <p ><i className="nc-icon nc-map-big"></i> <strong>Location: </strong> {therapist.location}</p>
                                        </Col>
                                        <Col md="3">
                                            <img className="float=left"src="https://www.healthdesign.org/sites/default/files/styles/responsive_image/public/pebble/partners/childrens.2color.jpg" />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            )
                         }
                         )
                        }
                        
                    
                </Container>
            </div>
        )
    }

export default Therapists;
