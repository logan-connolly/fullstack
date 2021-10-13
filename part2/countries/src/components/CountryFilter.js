const CountryFilter = ({ search, setSearch }) => {
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      find countries: <input onChange={searchHandler} value={search} />
    </div>
  );
};

export default CountryFilter;
