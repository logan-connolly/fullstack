import React, { useState, useEffect } from "react";
import personApi from "./services/persons";
import ContactFilter from "./components/ContactFilter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    personApi.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactFilter search={search} setSearch={setSearch} />
      <ContactForm persons={persons} setPersons={setPersons} />
      <ContactList persons={persons} search={search} setPersons={setPersons} />
    </>
  );
};

export default App;
