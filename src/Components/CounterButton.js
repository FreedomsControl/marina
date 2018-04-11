import React, { Component } from 'react';

export class CounterButton extends Component {

  state = {count: 0}

  render() {
    const {count} = this.state

    return (
      <div className="CounterButton">
        <button type='button' onClick={() => this.setState({count: count + 1})}>
          Increment
          </button>
          <h3>current count is {count}</h3>
      </div>
    )
  }
}
