import { useState, useEffect } from "react";
import axios from "axios";
import CountryFilter from "./components/CountryFilter";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  const countriesUrl = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    axios.get(countriesUrl).then((resp) => setCountries(resp.data));
  }, []);

  const countriesToShow = countries.filter((country) =>
    country.name.common.includes(search)
  );

  return (
    <>
      <CountryFilter search={search} setSearch={setSearch} />
      <CountryList countries={countriesToShow} />
    </>
  );
};

export default App;
