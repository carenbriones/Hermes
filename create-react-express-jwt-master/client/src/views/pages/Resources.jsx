import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardImg,
    CardText,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    ListGroup,
    ListGroupItem,
    Table,
    Row,
    Col
} from "reactstrap";

import withAuth from "../../components/withAuth";
import API from "../../utils/API";

class Resources extends React.Component {

    //   state = {
    //     resources
    //   }; 


    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col lg="4">
                            <Card>
                                <CardImg top src="https://via.placeholder.com/200" alt="Resource Image" style={{
                                    height: "250px",
                                    objectFit:"cover"
                                }}/>
                                <CardBody>
                                    <h3>RESOURCE TITLE</h3>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
                                    <CardText><small className="text-muted">Resource Category</small></CardText>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col lg="4">
                            <Card>
                                <CardImg top src="https://via.placeholder.com/200" alt="Resource Image" style={{
                                    height: "250px",
                                    objectFit:"cover"
                                }}/>
                                <CardBody>
                                    <h3>RESOURCE TITLE</h3>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
                                    <CardText><small className="text-muted">Resource Category</small></CardText>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col lg="4">
                            <Card>
                                <CardImg top src="https://via.placeholder.com/200" alt="Resource Image" style={{
                                    height: "250px",
                                    objectFit:"cover"
                                }}/>
                                <CardBody>
                                    <h3>RESOURCE TITLE</h3>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
                                    <CardText><small className="text-muted">Resource Category</small></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Resources;
