import React from "react";

const Title = ({ event }) => <h1>{event}</h1>

const RCers = ({ members }) => {

    return (
      <div>
        {members.map(({ firstName, language }, i) => (
          <Developers
            key={i} name={firstName} language={language}
          />
        ))}
      </div>
    );
}

const Developers = ({ firstName, language }) => (
  <p>
    {firstName} {language}
  </p>
);

const Obj = () => {
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
      <RCers developers={developers.members}/>
    </div>
  );
};

export default Obj;
