import React, { Component } from 'react'

export class FormInformation extends Component {
    render() {
        return (
            <div>
                <h1>User Info</h1>
                <h3>{this.props.userName}</h3>
                <h3>{this.props.userPosition}</h3>
            </div>
        )
    }
}

export default FormInformation
