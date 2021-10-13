import { useState, useEffect } from "react";
import axios from "axios";
import CountryFilter from "./components/CountryFilter";
import CountryList from "./components/CountryList";
import CountryView from "./components/CountryView";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const countriesUrl = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    axios.get(countriesUrl).then((resp) => setCountries(resp.data));
  }, []);

  const showView = selected ? (
    <CountryView country={selected} />
  ) : (
    <CountryList
      countries={countries}
      search={search}
      setSearch={setSearch}
      setSelected={setSelected}
    />
  );

  return (
    <>
      <CountryFilter
        search={search}
        setSearch={setSearch}
        setSelected={setSelected}
      />
      {showView}
    </>
  );
};

export default App;
