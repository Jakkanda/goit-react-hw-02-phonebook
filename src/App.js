import React, { Component } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { Contacts } from './components/Contacts/Contacts';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitData = data => {
    this.setState({
      contacts: data,
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitData} />
        <h2>Contacts</h2>
       <Contacts props={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
