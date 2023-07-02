import { Component } from "react";
import { Phonebook } from "./Phonebook";
import { ContactsList } from "./Contacts";
import { Filter } from "./Filter";
import data from './data';
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Layout";

export class App extends Component {
  state = {
    contacts: data,
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts?.length) {
      this.setState({
        contacts,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = newContact => {
    this.state.contacts.filter(contact => contact.name === newContact.name)
      .length
      ? alert(`${newContact.name} is already in contacts!`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();

    const filtredData = this.state.contacts.filter(contacts =>
      contacts.name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return (
      <Container>
        <GlobalStyle/>
        <Phonebook onSave={this.addContact} />
        <Filter onChange={this.onFilter} value={this.filter} />
        <ContactsList contacts={filtredData} onDelete={this.onDelete} />
        <GlobalStyle />
      </Container>
    );
  }
}
