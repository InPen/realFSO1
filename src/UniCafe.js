import React, { useState } from "react";
import ReactDOM from "react-dom";

const Stats = (props) => {
  console.log(props.sdf);
  const printThis = () => {
    console.log("did it print?");
  };
  return (
    <div onClick={printThis}>
      <p>Our total rating is {props.total} </p>
      <p>Our average rating is {props.average} </p>
      <p>Our positive feedback is at {props.averagePositive} </p>
    </div>
  );
};

const Button = (props) => {
  // console.log('props value is ', props)
  const { onClick, text } = props;
  return <button onClick={onClick}> {text} </button>;
};

const UniCafe = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const totalFeedback = () => {
    let total = good + neutral + bad;
    // console.log(total)
    return total;
  };
  const averageScore = () => {
    let average = (good + neutral + bad) / 3;
    // console.log(average)
    return average;
  };
  const percentageOfPositiveFeedback = () => {
    let percent = good / 100;
    console.log(percent);
    return percent;
  };

  return (
    <div>
      <h2> Give Feedback, Please~ </h2>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <hr />
      <h2> Statistics </h2>
      <p>Good: {good} </p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      {good || bad || neutral ? (
        <Stats
          total={totalFeedback()}
          average={averageScore()}
          averagePositive={percentageOfPositiveFeedback()}
        />
      ) : (
        <h4>No feedback given</h4>
      )}
    </div>
  );
};

export default UniCafe;
