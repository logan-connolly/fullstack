const Part = ({ item }) => {
  const { name, exercises } = item;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((item) => (
        <Part item={item} />
      ))}
    </div>
  );
};

export default Content;
