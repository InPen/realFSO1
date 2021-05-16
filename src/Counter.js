//imports the useState function
import React, { useState } from "react";

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Counter = (props) => {
  //function body that defines the component
  //The function call adds state to the component and renders it initialized with the value of zero.
  //The counter variable is assigned the initial value of state which is zero. The variable setCounter is assigned to a function that will be used to modify the state.
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Display counter = {counter} />
      <button onClick={() => setCounter(counter + 1)}>Plus</button>
      <button onClick={() => setCounter(0)}>Zero</button>
    </div>
  );};

export default Counter;