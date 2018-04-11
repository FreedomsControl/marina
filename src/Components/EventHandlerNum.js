import React, { Component } from 'react';



export class EventHandlerNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
//     if (Number.isInteger(this.state.value) !== true || this.state.value + (-1 * this.state.value) == 0) {
//       alert("Please only enter positive integers.");
//     }
   let inputNum = this.state.value;
   exports.inputNum = inputNum;
    event.preventDefault();
  }

  render() {
    return (
      <form class="Num" onSubmit={this.handleSubmit}>
        <label>
          Amount:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
