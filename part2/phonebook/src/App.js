import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactFilter from "./components/ContactFilter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");

  const personsUrl = "http://localhost:3001/persons";
  useEffect(() => {
    axios.get(personsUrl).then((resp) => setPersons(resp.data));
  }, []);

  const contactsToShow = persons.filter((p) =>
    p.name.includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactFilter search={search} setSearch={setSearch} />
      <ContactForm persons={persons} setPersons={setPersons} />
      <ContactList persons={contactsToShow} />
    </>
  );
};

export default App;
