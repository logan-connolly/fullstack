import { useState, useEffect } from "react";
import axios from "axios";
import CountryFilter from "./components/CountryFilter";
import CountryView from "./components/CountryView";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const countriesUrl = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    axios.get(countriesUrl).then((resp) => setCountries(resp.data));
  }, []);

  return (
    <>
      <CountryFilter
        search={search}
        setSearch={setSearch}
        setSelected={setSelected}
      />
      <CountryView
        countries={countries}
        search={search}
        selected={selected}
        setSearch={setSearch}
        setSelected={setSelected}
      />
    </>
  );
};

export default App;
