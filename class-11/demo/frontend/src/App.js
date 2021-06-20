import React, { Component } from 'react'
import Login from './components/Login';
import Logout from './components/Logout';
import User from './components/User';
import { withAuth0 } from "@auth0/auth0-react";

export class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div>
        <Login />
        <Logout />


        {isAuthenticated && (
          <>
            <User />
          </>
        )}
      </div>
    )
  }
}

export default withAuth0(App)
