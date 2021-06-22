import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';

import Login from './Login';
import Logout from './Logout';

export class Header extends Component {
    render() {
        return (
            <nav>
                {this.props.auth0.isAuthenticated ? <Logout /> : <Login />}
            </nav>
        )
    }
}

export default withAuth0(Header)
