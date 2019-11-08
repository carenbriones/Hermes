import React from "react";
import { Link } from "react-router-dom"

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
    sessions: [],
    child: []
  }

  componentDidMount() {
    const href = window.location.href.split("/")

    API.getOneChild(href[href.length - 1]).then((res) => {
      this.setState({
        sessions: res.data.sessions,
        child: res.data
      })
      console.log(this.state.sessions);
      console.log(res.data._id)
    })
  }

  render() {
    return (
      <div className="content">
        <Card>
          <CardHeader>
            <h5 className="title float-left">Sessions</h5>
            <Button href={`../newSession/${this.state.child._id}`} className="btn-sm btn-primary float-right">
              Track Session
                    </Button>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead>
                <tr>
                  <th>Date</th>
                  <th className="text-center">Has Notes</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.sessions.map((session) =>
                  <tr key={session._id}>
                    <td>{session.date.slice(0, 10)}</td>
                    <td className="text-center"></td>
                    <td className="text-center">
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
    )
  }

}

export default withAuth(SessionTable);