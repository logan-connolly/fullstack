import { useState } from "react";

const CountryList = ({ countries, search, setSearch, setSelected }) => {
  let filtered = countries.filter((country) =>
    country.name.common.includes(search)
  );

  if (filtered.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  const buttonHandler = (country) => {
    setSearch(() => country.name.common);
    setSelected(country);
  };

  if (filtered.length > 1) {
    return (
      <ul>
        {filtered.map((country) => (
          <li key={country.cca3}>
            {country.name.common}
            <span>
              <button onClick={() => buttonHandler(country)}>show</button>
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (filtered.length === 1) {
    const [country] = filtered;
    setSelected(country);
  }

  return <p>Loading countries ...</p>;
};

export default CountryList;
