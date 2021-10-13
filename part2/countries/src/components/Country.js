const Country = ({ country }) => {
  return (
    <div>
      <h1>
        {country.name.common} {country.flag}
      </h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h4>languages</h4>
      <ul>
        {Object.entries(country.languages).map((item) => {
          const [code, language] = item;
          return <li key={code}>{language}</li>;
        })}
      </ul>
    </div>
  );
};

export default Country;
