import React, { Component } from 'react'

export class CreateForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.createMyCat(e)}>
                <label>Cat Name</label>
                <input onChange={(e) => this.props.updateCatName(e.target.value)}></input>
                <input type='submit' value="create cat" />
            </form>

        )
    }
}

export default CreateForm
