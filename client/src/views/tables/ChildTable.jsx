import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
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

  showChildren(arr) {
    if (arr.length === 0) {
      return (
        <Card>
          <CardBody className="text-center">
            <CardTitle><h3>You Have Not Added Any Children</h3></CardTitle>
            <CardText>Please add a child, to access session tracking tools.  </CardText>
            <Button href="/admin/addChild" className=" btn-primary">
              Addd A Child
                      </Button>
          </CardBody>
        </Card>
      )

    } else {

      return (

        <Card>
          <CardHeader>
            <h5 className="title float-left">Children</h5>
            <Button href="/admin/addChild" color="info" size="sm" className="float-right">
              Add Child
                      </Button>
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
                  <tr key={child._id}>
                    <td><a href={`child/${child._id}`}>{child.firstName} {child.lastName}</a></td>
                    <td>{child.dateOfBirth.slice(0, 10)}</td>
                    <td>{child.gender}</td>
                    <td>{child.therapist}</td>
                    <td>
                      <Button href={`newSession/${child._id}`} color="success" size="sm">
                        Start Session
                      </Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </CardBody>
        </Card>

      )


    }


  }

  render() {
    return (
      <>
        {/* <Card>
        <CardHeader>
          <h5 className="title float-left">Children</h5>
          <Button href="/admin/addChild" color="info" size="sm" className="float-right">
            Add Child
                    </Button>
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
                <tr key={child._id}>
                  <td><a href={`child/${child._id}`}>{child.firstName} {child.lastName}</a></td>
                  <td>{child.dateOfBirth.slice(0, 10)}</td>
                  <td>{child.gender}</td>
                  <td>{child.therapist}</td>
                  <td>
                    <Button href={`newSession/${child._id}`} color="success" size="sm">
                      Start Session
                    </Button>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </CardBody>
      </Card> */}

        {this.showChildren(this.state.children)}
      </>
    )
  }

}

export default withAuth(ChildTable);