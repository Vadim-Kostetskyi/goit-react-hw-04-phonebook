import './style.css';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

const Feedback = () => {
  const contactsList = JSON.parse(localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState(
    contactsList
      ? contactsList
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submit = contact => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    const unique = contacts.map(elem =>
      contact.name.toLowerCase() !== elem.name.toLowerCase() ? true : false
    );

    unique.includes(false)
      ? alert(`${contact.name} is alredy in contacts`)
      : setContacts(e => [...e, newContact]);
  };

  const filterNames = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const changeFilter = el => {
    setFilter(el.target.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const visible = filterNames();
  return (
    <div className="box">
      {<Form onSubmit={submit} />}
      <h1>Contacts</h1>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={deleteContact} visible={visible} />
    </div>
  );
};

export const App = () => {
  return <div>{<Feedback />}</div>;
};
