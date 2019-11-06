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

class SessionTable extends React.Component {

  state = {
    sessions: []
  }
  
  componentDidMount() {
    const href = window.location.href.split("/")

    API.getOneChild(href[href.length - 1]).then((res) => {
      this.setState({
        sessions: res.data.sessions
      })
      console.log(this.state.sessions);
    })
  }

  render() { 
    return (
    <div className="content">
      <Card>
        <CardHeader>
          <h5 className="title">Sessions</h5>
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.sessions.map((session) => 
                <tr>
                  <td>{session.date}</td>
                  <td>
                    <Button href={``} color="info" size="sm">
                      View Session
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

export default withAuth(SessionTable);