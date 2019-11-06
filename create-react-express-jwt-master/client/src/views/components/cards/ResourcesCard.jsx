import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Table,
} from "reactstrap";

function ResourcesCard(props) {

    return (
        <Col lg="4">
            <Card>
                <CardImg top src="https://via.placeholder.com/200" alt="Resource Image" style={{
                    height: "250px",
                    objectFit: "cover"
                }} />
                <CardBody>
                    <h3>RESOURCE TITLE</h3>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
                    <CardText><small className="text-muted">Resource Category</small></CardText>
                </CardBody>
            </Card>
        </Col>

    )

}

export default ResourcesCard