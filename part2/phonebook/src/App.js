import React, { useState } from "react";
import ContactFilter from "./components/ContactFilter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [search, setSearch] = useState("");

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
