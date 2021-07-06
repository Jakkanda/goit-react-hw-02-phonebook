import React, { Component } from 'react';
import './App.css';
import { Form } from './components/Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handlerSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <Form onSubmit={this.handlerSubmit} />
        <h2>Contacts</h2>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default App;
