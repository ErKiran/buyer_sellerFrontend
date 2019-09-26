import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { setCurrentUser, logoutUser } from './actions/authAction';
import ForgetPassword from './Components/Authentication/ForgetPassword';
import Info from './Components/common/Info';
import TermsAndCondition from './Components/TermsPrivacy/TermsAndCondition';
import ConsultantProfile from './Components/Profile/ConsultantProfile';
import SeekerProfile from './Components/Profile/SeekerProfile';
import Landing from './Components/Landing/Landing';
import ChangePassword from './Components/Profile/ChangePassword';

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
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/change_password" component={ChangePassword} />
            <Route exact path="/forget_password" component={ForgetPassword} />
            <Route exact path="/forget_password_info" component={Info} />
            <Route exact path="/terms_and_condition" component={TermsAndCondition} />
            <Route exact path="/Consultantprofile" component={ConsultantProfile} />
            <Route exact path="/Seekerprofile" component={SeekerProfile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;