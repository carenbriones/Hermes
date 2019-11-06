import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
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

class UserProfile extends React.Component {

  state = {
    name: "",
    email: "",
    children: [],
    address: "",
    role: "",
    phoneNumber: ""
  }

  componentDidMount() {
    console.log(this.props.match.id)

    API.getUser(this.props.user.id).then(res => {
      this.setState({
        name: res.data.name,
        email: res.data.email,
        address: res.data.address,
        role: res.data.role,
        phoneNumber: res.data.phoneNumber,
        children: res.data.children,
      })
    })
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/bg/profilebg.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a >
                      <img
                        alt="User Avatar"
                        className="avatar border-gray"
                        src={require("assets/img/onepunch.jpg")}
                      />
                      <h3 className="title" style={{marginBottom: "0px"}}>{this.state.name}</h3>
                    </a>
                    <h5 style={{fontStyle: "italic"}}>{this.state.role} </h5>
                  </div>

                  <ListGroup flush>

                  <ListGroupItem><p className="text-center" style={{
                    fontSize: "1rem",
                    marginBottom: "0px"
                  }}>
                  <i className="nc-icon nc-email-85 mx-2" />    {this.state.email}</p>
                  </ListGroupItem>

                  <ListGroupItem><p className="text-center" style={{
                    fontSize: "1rem",
                    marginBottom: "0px"
                  }}>
                  <i className="nc-icon nc-mobile mx-2" /> 
                    {this.state.phoneNumber}</p>
                  </ListGroupItem>

                  <ListGroupItem><p className="text-center" style={{
                    fontSize: "1rem",
                    marginBottom: "0px"
                  }}>
                  <i className="nc-icon nc-pin-3 mx-2" /> 
                    {this.state.address} </p>
                  </ListGroupItem>

                  </ListGroup>
                </CardBody>

              </Card>
          
            </Col>

            <Col md="8">

              <Card>
                <CardHeader>
                  <h5 className="title">Children</h5>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Child Name</th>
                        <th>D.O.B</th>
                        <th>Gender</th>
                        <th>Therapist</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Child Name</td>
                        <td>2 /18/ 2015</td>
                        <td >Male</td>
                        <td >Dr. Sleep</td>
                        <td >
                          <Button href={"INSERT PATH"} color="info" size="sm">
                            View Child
                          </Button>{` `}
                          <Button  href={"INSERT PATH"} color="success" size="sm">
                            Start Session
                          </Button>{` `}
        
                        </td>
                      </tr>
                      
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default withAuth(UserProfile);
