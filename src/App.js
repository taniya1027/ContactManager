import React from "react";
import {useState, useEffect } from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import {uuid} from "uuidv4";
import Form from "./Components/AddContact";
import Header from "./Components/Header";
import Contact from "./Components/ContactList";

function App() {
  const Local_Storage_Key = "contacts";
  const [contacts,setContacts] = useState([]);
  
  const addContact = (contact) =>{
      setContacts([...contacts,{id : uuid(), ...contact}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }
  
  useEffect(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if(retrieveContact) setContacts(retrieveContact)
  },[]);
  
  useEffect(()=>{
    localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts))
  },[contacts])

  return (
    <div className="App">
      <Router>   
      <Header/>
      <Switch>
      <Route path = "/" exact  render = {(props) => (
        <Contact
         {...props}
          contacts = {contacts}
          getContactId = {removeContactHandler}
        />
      )}
      />
      
      <Route path = "/add" render = {(props) => (
        <Form 
        {...props}
        addContacthandler = {addContact}/>
      )}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
