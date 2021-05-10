import React from "react";

const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => (
  <div>
    {parts.map(({ name, exercises }, i) => (
      <Part key={i} name={name} exercises={exercises} />
    ))}
  </div>
);

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return <p>Number of exercises {total}</p>;
};

const CourseInfo = () => {
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
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default CourseInfo;
