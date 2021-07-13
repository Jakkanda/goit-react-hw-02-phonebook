import React from 'react';

export function Contacts (props) {
     return (
    <ul>
      {props.contacts.map(contact => {
        return (
            <li> <p>Name: {contact.name}</p> <p>Number: { contact.number}</p></li>
        );
      })}
    </ul>
  );
}