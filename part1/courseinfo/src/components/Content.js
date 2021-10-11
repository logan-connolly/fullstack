const Part = (props) => {
  return (
    <p>
      {props.item.desc} {props.item.count}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((item) => (
        <Part item={item} />
      ))}
    </div>
  );
};

export default Content;
