import React, { Component } from 'react';

//vars
var _conTable = require('../Assets/Tables/conTable');
var conTable = _conTable.conTable;


//funcs
function inArray(needle,haystack)
{
    var count=haystack.length;
    for(var i=0;i<count;i++)
    {
        if(haystack[i]===needle){return true;}
    }
    return false;
}

export class EventHandlerFrom extends React.Component {
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
     if (inArray(this.state.value, conTable) === false) {
       alert("Please only enter positive integers.");
     }
     let inputFrom = conTable[this.state.value];
     exports.inputFrom = inputFrom;
    event.preventDefault();
  }

  render() {
    return (
      <form class="From" onSubmit={this.handleSubmit}>
        <label>
          From:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
