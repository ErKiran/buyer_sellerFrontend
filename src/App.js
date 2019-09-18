import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Register from './Components/Authentication/Register';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;