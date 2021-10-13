import CountryView from "./CountryView";

const CountryList = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  const showCountry = (country) => {
    return <CountryView country={country} />;
  };

  if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            {country.name.common}
            <span>
              <button onClick={() => showCountry(country)}>show</button>
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (countries.length === 1) {
    const [country] = countries;
    return <CountryView country={country} />;
  }

  return <p>Loading countries ...</p>;
};

export default CountryList;
