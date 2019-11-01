import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  },
  getChildren: () => {
    return axios.get(`/api/child`);
  },
  //get a child by id, populated with sessions /api/child/:id
  getOneChild: (id) => {
    return axios.get(`/api/child/${id}`);
  },
  //get a session by id /api/session/:id
  getOneSession: (id) => {
    return axios.get(`/api/session/${id}`);
  },
  //post a new child /api/user/:id
  postNewChild: (userId, newChild) => {
    return axios.post(`/api/user/${userId}/children`, newChild);
  },
  //post a new session /api/child/:id/sessions
  postNewSession: (childId, newSession) => {
    return axios.post(`/api/child/${childId}/sessions`, newSession);
  }
};
