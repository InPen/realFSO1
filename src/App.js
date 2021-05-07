import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}


const App = () => {
  const name = 'Iktan'
  const age = 18

  return (
    <div>
      <h1>Greetings!</h1>
      <Hello name={"Han"} age={-26 + -1} />
      <Hello name={"Inés"} age={12 / 2} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
