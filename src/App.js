import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}


const App = () => {
  const now = new Date()
  const a = 18
  const b = 8

  return (
    <div>
      <Hello name={'Han'}/>
      <Hello name={'Inés'}/>
      <Hello name={'Iktan'}/>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};

export default App;
