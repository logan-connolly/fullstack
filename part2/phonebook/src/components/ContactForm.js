import React, { useState } from "react";

const ContactForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const contactExists = () => {
    return (
      persons.filter((p) => p.name.toLowerCase() === newName.toLowerCase())
        .length > 0
    );
  };

  const addContact = (event) => {
    event.preventDefault();

    if (contactExists()) {
      alert(`${newName} is already in phonebook`);
    } else {
      setPersons(
        persons.concat({
          id: persons.length + 1,
          name: newName,
          number: newPhone,
        })
      );
      setNewName("");
      setNewPhone("");
    }
  };

  const nameInputHandler = (event) => {
    setNewName(event.target.value);
  };

  const phoneInputHandler = (event) => {
    setNewPhone(event.target.value);
  };

  return (
    <div>
      <h2>Add a new contact</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={nameInputHandler} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={phoneInputHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
