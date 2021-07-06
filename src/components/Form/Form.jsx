import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <form type="submit">
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title=""
          required
        />
        <button type="button">Add contact </button>
      </form>
    );
  }
}
