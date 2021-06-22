import React, { Component } from 'react'

export class UpdateForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.updateMyCat(e)}>
                <label>Update Cat Name</label>
                <input value={this.props.catNameUpdate} onChange={(e) => this.props.updateCatNameUpdateForm(e.target.value)}></input>
                <input type="submit" value="update cat" />
            </form>
        )
    }
}

export default UpdateForm
