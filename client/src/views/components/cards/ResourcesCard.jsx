import React, { Component } from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Table,
    Col,
    CardImg,
    CardText

} from "reactstrap";

function ResourcesCard(props) {

    return (
        <Col lg="4">
            <Card>
                <CardImg top src={props.img} alt={props.title} style={{
                    height: "250px",
                    objectFit: "cover"
                }} />
                <CardBody>
                    <h5 style={{marginTop:"0px"}}>{props.title}</h5>
                    <CardText>{props.brief}</CardText>
                    <a href={"/admin/resource/" + props.id}> READ ARTICLE </a>
                    <CardText><small className="text-muted float-right">{props.category}</small></CardText>
                </CardBody>
            </Card>

        </Col>
    )
}
export default ResourcesCard;