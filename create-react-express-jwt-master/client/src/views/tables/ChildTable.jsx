import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
} from "reactstrap";

function ChildTable(props){

    return (
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
                <td>{props.name}</td>
                <td>{props.dateOfBirth}</td>
                <td >{props.gender}</td>
                <td >{props.therapist}</td>
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

    )

}

export default ChildTable