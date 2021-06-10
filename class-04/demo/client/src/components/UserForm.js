import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormInformation from './FormInformation';

export class UserForm extends Component {

    // While the use is typing in the info in the input field
    // we will take those info and save them inside our state

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPosition: '',
            showInfoComponent: false
        }
    }

    // create an arrow function that will be invoked whenever there is a change happening to the Form Control Input

    // promise or an async function
    // is basically a function that take some time to apply/ execute changes
    updateName = (e) => {
        console.log(e.target.value)
        this.setState({
            userName: e.target.value
        });
    }

    updatePosition = (e) => {
        this.setState({
            userPosition: e.target.value
        })
    }


    // when the use submits the form, the data in our state will be passed down to our FormInfo Component

    submitForm = (e) => {
        e.preventDefault();

        // We wil need to have a state that will render the component once we submit the form 
        this.setState({
            showInfoComponent: true
        })
    }

    render() {
        return (
            <>
                <>
                    <Form onSubmit={(e) => this.submitForm(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => this.updateName(e)} type="text" placeholder="Enter Your name" />
                            <Form.Text className="text-muted">
                                Your Name
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId='select'>
                            <select onChange={(e) => this.updatePosition(e)} aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="Software Developer">Software Developer</option>
                                <option value="Instructor">Instructor</option>
                                <option value="Coffee Drinker">Coffee Drinker</option>
                            </select>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                </>

                <>
                    {/* Condition rendering  */}

                    {
                        this.state.showInfoComponent &&
                        <FormInformation
                            userName={this.state.userName}
                            userPosition={this.state.userPosition}
                        />
                    }
                </>
            </>
        )
    }
}

export default UserForm
