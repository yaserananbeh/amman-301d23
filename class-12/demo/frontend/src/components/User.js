import React, { Component } from 'react'
import Cat from './Cat';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.auth0.user.name,
            userEmail: this.props.auth0.user.email,
            userPicture: this.props.auth0.user.picture,
            serverUrl: process.env.REACT_APP_SERVER_URL,
            catsData: []
        }
    }

    // this is a react function that will execute once the component rendered
    componentDidMount = () => {
        axios.get(`${this.state.serverUrl}/cats?email=${this.state.userEmail}`).then(response => {
            this.setState({
                catsData: response.data[0].cats
            })
        }).catch(
            error => {
                alert(error.message);
            }
        );
    }


    render() {
        // console.log(this.props.auth0);
        return (
            <div>
                <div>
                    <h2>{this.state.userName}</h2>
                    <p>{this.state.userEmail}</p>
                    <img src={this.state.userPicture} alt={this.state.userName} />
                </div>
                {this.state.catsData.length > 0 &&
                    <div>
                        <Cat
                            cats={this.state.catsData}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default withAuth0(User)