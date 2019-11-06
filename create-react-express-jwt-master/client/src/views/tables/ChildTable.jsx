import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  Col
} from "reactstrap";

import withAuth from "../../components/withAuth";
import API from "../../utils/API";

class ChildTable extends React.Component {

  state = {
    children: []
  }
  
  componentDidMount() {
    API.getUser(this.props.user.id).then((res) => {
      this.setState({
        children: res.data.children
      })
      console.log(this.state.children);
    })
  }

  render() { 
    return (
    <div className="content">
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
              {this.state.children.map((child) => 
                <tr>
                  <td>{child.firstName} {child.lastName}</td>
                  <td>{child.dateOfBirth}</td>
                  <td>{child.gender}</td>
                  <td>{child.therapist}</td>
                  <td>
                    <Button href={``} color="info" size="sm">
                      View Child
                    </Button>
                    <Button  href={`newSession/${child._id}`} color="success" size="sm">
                      Start Session
                    </Button>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )}

}

export default withAuth(ChildTable);