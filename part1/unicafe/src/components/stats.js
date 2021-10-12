import React from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ counts }) => {
  const { good, neutral, bad } = counts;

  const getTotal = () => good + neutral + bad;
  const getAverage = () => ((good - bad) / getTotal()).toFixed(2);
  const getPercentPositive = () => ((good / getTotal()) * 100).toFixed(2);

  if (good === 0 && neutral === 0 && bad === 0)
    return <p>No feedback given </p>;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={getTotal()} />
        <StatisticLine text="average" value={getAverage()} />
        <StatisticLine text="positive" value={getPercentPositive()} />
      </tbody>
    </table>
  );
};

export { Statistics };
