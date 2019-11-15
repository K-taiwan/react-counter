import React, { Component } from 'react';
import Header from './Header';
import CounterList from './CounterList';


class App extends Component {
  state = {
    counters: 0
  }
  
  handleDecrement = () => {
    if(this.state.counters > 0){
      this.setState({
        counters: this.state.counters - 1
      })
    }
  }
  handleIncrement = () => {
    this.setState({
      counters: this.state.counters + 1
    })
  }

  render() {
    const {counters} = this.state;
    return (
      <div className="App">
        <Header 
        counters={counters} 
        handleDecrement={this.handleDecrement} 
        handleIncrement={this.handleIncrement} 
        />
        <CounterList counters={counters}/>
      </div>
    );
  }
}

export default App;