import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar/Sidebar"

class Profile extends Component {

  state = {
    name: "",
    email: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      
      this.setState({
        name: res.data.name,
        email: res.data.email
      })
    });
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div className="container Profile" style={{marginTop:"70px"}}>
          <h1>On the profile page!</h1>
          <p>Username: {this.state.name}</p>
          <p>Email: {this.state.email}</p>
          <Link to="/">Go home</Link>
        </div>
      </div >
    )
  }
}

export default withAuth(Profile);