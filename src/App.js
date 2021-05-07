import React from "react";

const Header = ({ course }) => {
  return (
    <h1>
      {course}
    </h1>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <p>
        {parts.name} has a total of {parts.exercises} exercises
      </p>
    </div>
  );
};


const Total = ({ parts}) => {
  return (
    <div>
      <p>
        The total number of exercises in this class is {parts.total}
      </p>
    </div>
  );
};


const App = () => {
const course = {
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ],
};

  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts.name} exercises={course.parts.exercises} />

      <Total total={course.parts.exercises} />
    </div>
  );
};



export default App;
