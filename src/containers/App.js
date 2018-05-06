import React, { Component } from 'react';
import RabbitMonthPair from '../components/RabbitMonthPair';
import './App.css';

class App extends Component {
  state = {
    monthWiseRabbits: [],
    currentMonth: 0,
    prev: 0,
    current: 1
  }

  handleClick = () => {
    const newMonth = this.state.currentMonth + 1;

    const { prev, current } = this.state;
    const next = prev + current;

    const updatedMonthWiseRabbits = [...this.state.monthWiseRabbits, { "month": newMonth, "rabbitCount": next }];

    this.setState({
      monthWiseRabbits: updatedMonthWiseRabbits,
      currentMonth: newMonth,
      prev: current,
      current: next
    })
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <h1>Fibonacci Rabbits &nbsp;
          <i className="em em-rabbit"></i>
            <i className="em em-carrot"></i>
          </h1>
          <ul className="list-group">
            {this.state.monthWiseRabbits.map(mwr => {
              return <RabbitMonthPair mwr={mwr} key={mwr.month} />
            })
            }
          </ul>
          <button onClick={this.handleClick}>Rabbit Breed</button>
        </div>
      </div>
    );
  }
}

export default App;
