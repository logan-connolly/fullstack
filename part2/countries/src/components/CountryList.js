const CountryList = ({ countries, search, setSearch, setSelected }) => {
  let filtered = countries.filter((country) =>
    country.name.common.includes(search)
  );

  if (filtered.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  const selectionHandler = (country) => {
    setSearch(() => country.name.common);
    setSelected(country);
  };

  if (filtered.length > 0) {
    return (
      <ul>
        {filtered.map((country) => (
          <li key={country.cca3}>
            {country.name.common}
            <span>
              <button onClick={() => selectionHandler(country)}>show</button>
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return <p>Loading countries ...</p>;
};

export default CountryList;
