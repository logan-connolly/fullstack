import CountryList from "./CountryList";
import Country from "./Country";

const CountryView = ({
  countries,
  search,
  selected,
  setSearch,
  setSelected,
}) => {
  if (selected) return <Country country={selected} />;

  return (
    <CountryList
      countries={countries}
      search={search}
      setSearch={setSearch}
      setSelected={setSelected}
    />
  );
};

export default CountryView;
