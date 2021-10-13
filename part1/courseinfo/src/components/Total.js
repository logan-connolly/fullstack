const Total = ({ parts }) => {
  const total = parts
    .map((item) => item.exercises)
    .reduce((prev, curr) => +prev + +curr, 0);
  return <p>Number of exercises {total}</p>;
};

export default Total;
