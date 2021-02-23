//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import contactsJson from "./contacts.json";

class App extends Component {

state = {
  contacts: contactsJson.slice(0,5),
}

handleAdd = () => {
  let randomIndex = Math.floor(Math.random() * contactsJson.length)
  let randomContact = contactsJson[randomIndex]

  this.setState({
    contacts: [...this.state.contacts, randomContact]
  })
}

handleSortName = () => {
  let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
  clonedContacts.sort((first, second) => {
      if (first.name > second.name) {
          return 1
      }
      else if (first.name < second.name) {
          return -1
      }
      else {
          return 0
      }
  })
  this.setState({
      contacts: clonedContacts
  })
}

handleSortPopularity = () => {
  let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
  clonedContacts.sort((first, second) => {
      if (first.popularity > second.popularity) {
          return 1
      }
      else if (first.popularity < second.popularity) {
          return -1
      }
      else {
          return 0
      }
  })
  this.setState({
      contacts: clonedContacts
  })
}

handleDelete = (contactId) => {
  let filteredContacts = this.state.contacts.filter((singleContact) => {
      return singleContact.id !== contactId
  })
  this.setState({
      contacts: filteredContacts
  })
}

render() {
  return (
    <div>
      <h1>Contacts</h1>

          <button onClick={this.handleAdd}>Add Random Contacts</button>
          <button onClick={this.handleSortPopularity}>Sort by Popularity</button>
          <button onClick={this.handleSortName}>Sort by Name</button>
          
      
      {
        this.state.contacts.map((singleContact, index) => {
          return (
            <div key={index}>
            {singleContact.name} 
            <img src={singleContact.pictureUrl} alt=""></img>
            {(singleContact.popularity).toFixed(2)}
            <button onClick={this.handleDelete}>Delete</button>
            </div>
          )
        })
      }
    </div>
  );
}
}
export default App;