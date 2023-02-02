import './style.css';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

const { Component, default: React } = require('react');

class Feedback extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsList = JSON.parse(localStorage.getItem('contacts'));
    if (contactsList) this.setState({ contacts: contactsList });
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  submit = contact => {
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

  filterNames = () => {
    const { filter } = this.state;
    return this.state.contacts.filter(el => {
      return el.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  changeFilter = el => {
    this.setState({ filter: el.target.value });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id),
    });
  };

  render() {
    const { filter } = this.state;
    const visible = this.filterNames();
    return (
      <div className="box">
        {<Form onSubmit={this.submit} />}
        <h1>Contacts</h1>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={this.deleteContact} visible={visible} />
      </div>
    );
  }
}

export const App = () => {
  return <div>{<Feedback />}</div>;
};
