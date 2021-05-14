//imports the useState function
import React, { useState } from "react";

const Counter = (props) => {
  //function body that defines the component
  //The function call adds state to the component and renders it initialized with the value of zero.
  //The counter variable is assigned the initial value of state which is zero. The variable setCounter is assigned to a function that will be used to modify the state.
  const [counter, setCounter] = useState(0);
  
  return( 
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Plus</button>
    </div>
)};

export default Counter;