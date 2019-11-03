import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import './assets/scss/paper-dashboard.css'
import App from './App';

import { Route, Router, Switch, Redirect} from 'react-router-dom';
import axios from "axios";
import registerServiceWorker from './registerServiceWorker';

// Our Layouts
import AuthLayout from "./layouts/Auth"


const hist = createBrowserHistory();

// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router history={hist}>
    <Switch>
    <Route exact path="/" component={App} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      {/* <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect to="/admin/dashboard" /> */}
    </Switch>
  </Router>,
     document.getElementById('root')
);
registerServiceWorker();