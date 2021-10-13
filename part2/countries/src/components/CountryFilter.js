const CountryFilter = ({ search, setSearch, setSelected }) => {
  const searchHandler = (event) => {
    setSearch(() => event.target.value);
    setSelected(() => "");
  };

  return (
    <div>
      find countries: <input onChange={searchHandler} value={search} />
    </div>
  );
};

export default CountryFilter;
