import { useState } from 'react';
import useLocalStorage from 'Hooks/useLocalStorage';
import ContactsForm from '../ContactsForm/ContactForm';
import ContactsList from '../ContactsList/ContactList';
import SearchFilter from '../SearchFilter/SearchFilter';
import BtnDeleteAll from '../BtnDeleteAll/BtnDeleteAll';
import json from '../data/contacts.json';
import stl from './App.module.css';
import shortid from 'shortid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const STORAGE_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useLocalStorage(STORAGE_KEY, json);
  const [fillter, setFillter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const findNumber = contacts.find(contact => contact.number === number);

    if (findName) {
      return Notify.warning(`${name} is already in the Phonebook`);
    }
    if (findNumber) {
      return Notify.warning(`${number} is already in the Phonebook`);
    }
    setContacts(prevState => [contact, ...prevState]);
  };
 
  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFillter = e => setFillter(e);

  const deleteAllContacts = () => {
    setContacts([]);
  };

  const getVisibleTasks = () => {
    const normalizedFillter = fillter.toLowerCase();
    const visibleTasks = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFillter)
    );
    return visibleTasks;
  };

  return (
    <div className={stl.container}>
      <h1 className={stl.title}>Phonebook</h1>
      <ContactsForm onAddContact={addContact} />
      <h2 className={stl.title}>Contacts</h2>
      <SearchFilter value={fillter} onChangeFilter={changeFillter} />
      <ContactsList
        contacts={getVisibleTasks()}
        onDeleteContact={deleteContact}
      />
      <BtnDeleteAll onDeleteAll={deleteAllContacts} />
    </div>
  );
};

export default App;
