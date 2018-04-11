import React, { Component } from 'react';


//vars
var _conTable = require('../Assets/Tables/conTable');
var conTable = _conTable.conTable;
var _inputTo = require('./Components/EventHandlerTo');
var _inputFrom = require('./Components/EventHandlerFrom');
var _inputNum = require('./Components/EventHandlerNum');
var inputTo = _inputTo.inputTo;
var inputFrom = _inputFrom.inputFrom;
var inputNum = _inputNum.inputNum;

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

export class _EH extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  if(inputFrom === "usd" || inputFrom == "$"){
    let output = inputNum * 0.82;
  });
  else{
    let output = inputNum * 1.22;
  }



  render() {
    return (
      <p> {inputNum}{inputFrom} is {output} {inputTo}
    );
  }
}
