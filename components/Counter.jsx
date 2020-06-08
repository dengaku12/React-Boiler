// Create components/Counter.jsx
import React, { Component } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onClear}) => (
  <div>
    <h1> Value: {value} </h1>
    <button onClick={() => onIncrement(1)}> + </button>
    <button onClick={onDecrement}> - </button>
    <button onClick={onClear}>clear</button>
    <button onClick={() => onIncrement(5)}>inc by 5</button>
  </div>
);

export default Counter;
