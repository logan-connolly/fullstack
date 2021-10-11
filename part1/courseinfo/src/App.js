import React from "react";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Total from "./components/Total.js";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { idx: 1, desc: "Fundamentals of React", count: 10 },
    { idx: 2, desc: "Using props to pass data", count: 7 },
    { idx: 3, desc: "State of a component", count: 14 },
  ];
  const total = parts
    .map((item) => item.count)
    .reduce((prev, curr) => +prev + +curr, 0);

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
