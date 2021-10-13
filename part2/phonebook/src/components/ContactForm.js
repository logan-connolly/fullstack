import { useState } from "react";
import personsApi from "../services/persons";

const ContactForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const updateContact = (person) => {
    if (newPhone === person.number) {
      alert(`${newName} is already in phonebook with that number`);
      return;
    }

    const updatedContact = { ...person, number: newPhone };
    const confirmed = window.confirm(
      `${person.name} was already added to phonebook, replace the old number with a new one?`
    );
    if (confirmed) {
      personsApi.update(person.id, updatedContact).then((updatedPerson) => {
        setPersons(
          persons.map((p) => (p.id === updatedPerson.id ? updatedPerson : p))
        );
      });
    }
  };

  const addContact = () => {
    const newContact = {
      name: newName,
      number: newPhone,
    };
    personsApi.create(newContact).then((addedPerson) => {
      setPersons(persons.concat(addedPerson));
    });
  };

  const formHandler = (event) => {
    event.preventDefault();

    if (newName === "" || newPhone === "") {
      alert("Cannot be missing form values!");
      return;
    }

    const existingContact = persons.find(
      (p) => p.name.toLowerCase() === newName.toLowerCase()
    );

    existingContact ? updateContact(existingContact) : addContact();

    setNewName("");
    setNewPhone("");
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
      <form onSubmit={formHandler}>
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
