import React, { Component } from 'react';
import Dashboard from './containers/dashboard/Dashboard'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import './sass/main.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
