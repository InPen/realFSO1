//imports the useState function
import React, { useState } from "react";

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = ({ text }) => {

  return (
    <button onClick = {text.handleClick}>
      {text}
    </button>
  )
}

const Counter = (props) => {
  //function body that defines the component
  //The function call adds state to the component and renders it initialized with the value of zero.
  //The counter variable is assigned the initial value of state which is zero. The variable setCounter is assigned to a function that will be used to modify the state.
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreaseByOne} text="minus" />
    </div>
  );};

export default Counter;