import React, { useState } from "react";
import { Header, Button } from "./components/ui";
import { Statistics } from "./components/stats";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const counts = { good, neutral, bad };

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  return (
    <>
      <Header text="Give Feedback" />
      <Button text="good" onClick={incrementGood} />
      <Button text="neutral" onClick={incrementNeutral} />
      <Button text="bad" onClick={incrementBad} />
      <Header text="Statistics" />
      <Statistics counts={counts} />
    </>
  );
};

export default App;
