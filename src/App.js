import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { setCurrentUser, logoutUser } from './actions/authAction';
import ForgetPassword from './Components/Authentication/ForgetPassword';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/';
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forget_password" component={ForgetPassword} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;