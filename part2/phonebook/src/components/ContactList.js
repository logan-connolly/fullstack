import React from "react";

const ContactList = ({ persons }) => {
  const titleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" ");
  };

  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.id}>
          {titleCase(person.name)} {person.number}
        </li>
      ))}
    </div>
  );
};

export default ContactList;
