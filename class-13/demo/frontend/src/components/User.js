import React, { Component } from 'react'
import Cat from './Cat';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';

export class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.auth0.user.name,
            userEmail: this.props.auth0.user.email,
            userPicture: this.props.auth0.user.picture,
            serverUrl: process.env.REACT_APP_SERVER_URL,
            catsData: [],
            catName: '',
            showUpdateForm: false,
            catNameUpdate: '',
            catIndex: 0
        }
    }

    updateCatName = (catName) => this.setState({ catName });
    updateCatNameUpdateForm = (catName) => this.setState({ catNameUpdate: catName });

    showUpdateForm = (catObject, idx) => this.setState({ showUpdateForm: !this.state.showUpdateForm, catNameUpdate: catObject.name, catIndex: idx })

    createMyCat = (e) => {
        e.preventDefault()
        // we are going to create a request body object, which will contain the email and the cat name to be sent over to the backend server

        const reqBody = {
            catName: this.state.catName,
            userEmail: this.state.userEmail
        }

        // to send a request for creating new data, we will be using the POST method
        axios.post(`${this.state.serverUrl}/cat`, reqBody).then(response => {
            this.setState({
                catsData: response.data.cats
            })
        }).catch(error =>
            alert(error.message)
        )

    }

    updateMyCat = (e) => {
        e.preventDefault();
        const reqBody = {
            catName: this.state.catNameUpdate,
            userEmail: this.state.userEmail
        }

        // to send a request for creating new data, we will be using the POST method
        axios.put(`${this.state.serverUrl}/cat/${this.state.catIndex}`, reqBody).then(response => {
            this.setState({
                catsData: response.data.cats
            })
        }).catch(error =>
            alert(error.message)
        )
    }

    deleteMyCat = (index) => {
        // This function will be sending an axios request to the backend with the cat index to be deleted
        // NOTE! when deleting items with axios, axios does not accept request body assignment

        axios.delete(`${this.state.serverUrl}/cat/${index}?email=${this.state.userEmail}`).then(response => {
            this.setState({
                catsData: response.data.cats,
                showUpdateForm: false
            });
        }).catch(error =>
            alert(error.message)
        )
    }

    // this is a react function that will execute once the component rendered
    componentDidMount = () => {
        axios.get(`${this.state.serverUrl}/cats?email=${this.state.userEmail}`).then(response => {
            this.setState({
                catsData: response.data.cats
            })
        }).catch(
            error => {
                alert(error.message);
            }
        );
    };


    render() {
        // console.log(this.props.auth0);
        return (
            <div>
                <div>
                    <h2>{this.state.userName}</h2>
                    <p>{this.state.userEmail}</p>
                    <img src={this.state.userPicture} alt={this.state.userName} />
                </div>
                <div>
                    <CreateForm
                        updateCatName={this.updateCatName}
                        createMyCat={this.createMyCat}
                    />
                </div>
                {this.state.showUpdateForm &&
                    <div>
                        <UpdateForm
                            updateMyCat={this.updateMyCat}
                            updateCatNameUpdateForm={this.updateCatNameUpdateForm}
                            catNameUpdate={this.state.catNameUpdate}

                        />
                    </div>

                }
                {this.state.catsData.length > 0 &&
                    <div>
                        <Cat
                            cats={this.state.catsData}
                            deleteMyCat={this.deleteMyCat}
                            showUpdateForm={this.showUpdateForm}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default withAuth0(User)