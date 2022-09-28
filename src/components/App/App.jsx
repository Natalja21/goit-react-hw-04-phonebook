import React, { Component } from 'react';
import ContactsForm from '../ContactsForm/ContactForm';
import ContactsList from '../ContactsList/ContactList';
import SearchFilter from '../SearchFilter/SearchFilter';
import BtnDeleteAll from '../BtnDeleteAll/BtnDeleteAll';
import json from '../data/contacts.json';
import stl from './App.module.css';
import shortid from 'shortid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const STORAGE_KEY = 'contacts';

class App extends Component {
  state = {
    contacts: json,
    fillter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    const initialContacts = this.state.contacts;

    if (initialContacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return Notify.warning(`${contact.name} is already in the Phonebook`);
    }
    else if (initialContacts.find(contact => contact.number === number)) {
      return Notify.warning(`${contact.number} is already in the Phonebook`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  onSubmitData = data => {
    console.log(this.data);
  };
  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  changeFillter = e => {
    this.setState({ fillter: e });
  };
  deleteAllContacts = () => {
    this.setState({contacts: []})
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts))
    }
  }
  componentDidMount() {
    const contacts = localStorage.getItem(STORAGE_KEY);
    const parseContacts = JSON.parse(contacts)
    if (parseContacts) {
      this.setState({contacts: parseContacts})
    }
  }

  render() {
    const { contacts, fillter } = this.state;
    const normalizedFillter = fillter.toLowerCase();
    const visibleTasks = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFillter)
    );
    return (
      <div className={stl.container}>
        <h1 className={stl.title}>Phonebook</h1>
        <ContactsForm
          onSubmitData={this.onSubmitData}
          onAddContact={this.addContact}
        />
        <h2 className={stl.title}>Contacts</h2>
        <SearchFilter value={fillter} onChangeFilter={this.changeFillter} />
        <ContactsList
          contacts={visibleTasks}
          onDeleteContact={this.deleteContact}
        />
        <BtnDeleteAll onDeleteAll={this.deleteAllContacts} />
      </div>
    );
  }
}
export default App;
