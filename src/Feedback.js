import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  // Only display statistics when feedback is given.
  if (total === 0) {
    return <p>No feedback given.</p>;
  } else {
    return (
      <div>
        
          <span text="Good" value={good} ></span>
          <span text="Neutral" value={neutral} ></span>
          <span text="Bad" value={bad} ></span>
          {/* Total number of collected feedback  */}
          <span text="All" value={total} ></span>
          <span text="Average" value={average} ></span>
          <span text="Positive" value={positive} ></span>
        
      </div>
    );
  }
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
      <h1>Give Feedback</h1>.  
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <title>Stats</title>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default Feedback;
