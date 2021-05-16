//imports the useState function
import React, { useState } from "react";

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
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


// When the application starts, the code in App is executed. This code uses a useState hook to create the application state, setting an initial value of the variable counter. This component contains the Display component - which displays the counter's value, 0 - and three Button components. The buttons all have event handlers, which are used to change the state of the counter.

// When one of the buttons is clicked, the event handler is executed. The event handler changes the state of the App component with the setCounter function. Calling a function which changes the state causes the component to rerender.

// So, if a user clicks the plus button, the button's event handler changes the value of counter to 1, and the App component is rerendered. This causes its subcomponents Display and Button to also be re-rendered. Display receives the new value of the counter, 1, as props. The Button components receive event handlers which can be used to change the state of the counter.