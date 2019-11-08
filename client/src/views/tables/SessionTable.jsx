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
      // Sorts sessions in order of date
      let sessions = res.data.sessions;
      sessions.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
      })

      this.setState({
        sessions: sessions
      })
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
                <tr key={session._id}>
                  <td>{session.date.slice(0, 10)}</td>
                  <td>
                    <Button href={`../viewSession/${session._id}`} color="info" size="sm">
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