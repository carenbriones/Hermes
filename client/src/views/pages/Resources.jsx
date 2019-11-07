import React from "react";
import ResourcesCard from "../components/cards/ResourcesCard"
import resources from "../../resources.json"
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

    state = {
        resources
    };


    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        {this.state.resources.map(resource => (
                            <ResourcesCard
                            img={resource.img}
                            title={resource.title}
                            brief={resource.brief}
                            id={resource.id}
                            category={resource.category}
                            />

                        ))}

                    </Row>
                </div>
            </>
        );
    }
}

export default Resources;
