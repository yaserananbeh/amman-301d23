import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Child extends React.Component {

    constructor(props) {
        // we are passing the props object as an argument to our parent React Component Class 
        super(props)

        // a react standard of saving information related to the class component
        // we call those information as states (conditions) to describe the state/ condition of the component.
        this.state = {
            childName: this.props.name,
            amountOfMoney: 0
        }
    }

    requestMoney = () => {
        // the request money child function will be invoking or calling the passed giveMoney function from the parent component
        this.props.giveMeMoney();
        let tempValue = this.state.amountOfMoney;
        this.setState({
            amountOfMoney: tempValue += 1
        })
    }

    render() {
        console.log(this.props);
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" />
                <Card.Body>
                    <Card.Title> Hello My name is {this.state.childName}</Card.Title>
                    <Card.Text> I have {this.state.amountOfMoney} JOD with me</Card.Text>
                    <Button onClick={this.requestMoney} variant="primary">Can I have 1 JOD</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Child;