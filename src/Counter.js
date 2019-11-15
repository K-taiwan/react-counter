import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    }

    handleDecrement = () => {
        this.setState({
        count: this.state.count - 1
        })
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render(){
        return(
            <div className="Counter">
                <h4>Counter: {this.state.count}</h4>
                <button onClick={this.handleDecrement}>Decremnt</button>
                <button onClick={this.handleIncrement}>Increment</button>

            </div>
        )
    }
}

export default Counter;