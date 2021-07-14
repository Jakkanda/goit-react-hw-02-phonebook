import React from 'react';

export function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {' '}
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => onDeleteContact(contact.id)}>Удалить</button>
          </li>
        );
      })}
    </ul>
  );
}
