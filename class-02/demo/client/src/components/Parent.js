import React from 'react';
import Child from './Child';

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amountOfMoney: 10
        }
    }

    giveMoney = () => {
        let tempValue = this.state.amountOfMoney;
        this.setState({
            amountOfMoney: tempValue -= 1
        })
    }

    render() {
        return (
            <div>
                <h2>Parent Component</h2>
                <p>
                    I am the parent and I have {this.state.amountOfMoney} JOD with me
                </p>
                {/* We are creating a new instance of the Child component; just as if we are saying new Child('Nimnim') */}
                <Child
                    name='NimNim'
                    giveMeMoney={this.giveMoney}
                />
            </div>
        )
    }
}

export default Parent;