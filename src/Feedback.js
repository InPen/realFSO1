import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Feedback = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => console.log("clicked")} text="Good" />
      <Button handleClick={() => console.log("clicked")} text="Neutral" />
      <Button handleClick={() => console.log("clicked")} text="Bad" />
    </div>
  );
};

export default Feedback;
