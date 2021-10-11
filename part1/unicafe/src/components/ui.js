const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export { Header, Button };
