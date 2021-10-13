const Total = ({ parts }) => {
  const total = parts
    .map((part) => part.exercises)
    .reduce((acc, next) => acc + next, 0);

  return <p style={{ fontWeight: "bold" }}>total of {total} exercises</p>;
};

export default Total;
