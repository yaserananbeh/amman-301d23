import React, { Component } from 'react'
import User from './components/User';
import { withAuth0 } from "@auth0/auth0-react";
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                {this.props.auth0.isAuthenticated && <User />}
              </Route>
            </Switch>
          </Router>
        </>
      </div>
    )
  }
}

export default withAuth0(App)
