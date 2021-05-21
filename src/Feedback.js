import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};





const Feedback = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const total = good + neutral + bad
  const average = Math.floor(total / 3)
  const positive = good + neutral 

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <h2>Stats</h2>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>Total : {total}</p>
      <p>Average : {average}</p>
      <p>Positive : {positive}</p>
    </div>
  );
};

export default Feedback;
