//My own project

import React from "react";

const Title = ({ event }) => <h1>{event}</h1>

const RCers = (props) => {
    // const members = props.members
    const { members } = props
    return (
      <ul>
        {members.map(({ firstName, language }, i) => (
          <Developer
            key={i} firstName={firstName} language={language}
          />
        ))}
      </ul>
    );
}

const Developer = ({ firstName, language }) => (
  <li>
    Name: {firstName} - Programming Language: {language}
  </li>
);

const AverageAge = (props) => {
  const members = props.members
  const average = members.reduce (
    (accum, current) => accum + current.age, 0
  )/ members.length

  return <span>The average age of our members is {average} </span>

}

const Event = () => {
  const developers = {
    event: "Resilient Coders Community Hours",
    members: [
      {
        firstName: "Sofia",
        lastName: "I.",
        country: "Argentina",
        continent: "Americas",
        age: 35,
        language: "Java",
      },
      {
        firstName: "Lukas",
        lastName: "X.",
        country: "Croatia",
        continent: "Europe",
        age: 35,
        language: "Python",
      },
      {
        firstName: "Madison",
        lastName: "U.",
        country: "United States",
        continent: "Americas",
        age: 32,
        language: "Ruby",
      },
    ],
  };

  return (
    <div>
      <Title event={developers.event} />
      <RCers members={developers.members} />
      <AverageAge members={developers.members} />
    </div>
  );
};

export default Event;
