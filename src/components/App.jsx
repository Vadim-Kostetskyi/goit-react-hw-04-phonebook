import './style.css';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
// const { useState, useEffect } = require('react');

const Feedback = () => {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

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

  // const componentDidMount = () => {
  //   const contactsList = JSON.parse(localStorage.getItem('contacts'));
  //   // if (contactsList) this.setState({ contacts: contactsList })
  //   if (contactsList) setContacts(contactsList);
  // };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const componentDidUpdate = prevState => {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // };

  const submit = contact => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    const unique = this.state.contacts.map(elem =>
      contact.name.toLowerCase() !== elem.name.toLowerCase() ? true : false
    );

    unique.includes(false)
      ? alert(`${contact.name} is alredy in contacts`)
      : this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  const filterNames = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const changeFilter = el => {
    // this.setState({ filter: el.target.value });
    setFilter(el.target.value);
  };

  const deleteContact = id => {
    // this.setState({
    //   contacts: this.state.contacts.filter(item => item.id !== id),
    // });
    setContacts(contacts.filter(item => item.id !== id));
  };

  // render() {
  //   const { filter } = this.state;
  const visible = filterNames();
  return (
    <div className="box">
      {<Form onSubmit={submit} />}
      <h1>Contacts</h1>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={deleteContact} visible={contacts} />
    </div>
  );
  // }
};

export const App = () => {
  return <div>{<Feedback />}</div>;
};
