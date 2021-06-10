import React from 'react';

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
            <div>
                <h2>Child Component</h2>

                <p>
                    Hello My name is {this.state.childName}
                </p>
                <p>
                    I have {this.state.amountOfMoney} JOD with me
                </p>
                <button onClick={this.requestMoney}>
                    Can I have 1 JOD
                </button>
            </div>
        )
    }
}

export default Child;