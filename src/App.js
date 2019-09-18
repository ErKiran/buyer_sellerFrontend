import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;