const { Component } = require('react');

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = el => {
    const { name, value } = el.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = el => {
    el.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            <h2>Name</h2>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.inputChange}
            />
          </label>
          <h2>Number</h2>
          <label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.inputChange}
            />
          </label>
          <button className="button" type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
