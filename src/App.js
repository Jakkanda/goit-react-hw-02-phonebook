import React, { Component } from 'react';
import './App.css';
import { Form } from './components/Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <Form />
        <h2>Contacts</h2>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default App;
