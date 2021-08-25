import React from "react";
import {useState, useEffect } from "react";
import {uuid} from "uuidv4";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Contact from "./Components/Contact";

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
      <Header/>
      <Form addContacthandler = {addContact}/>
      <Contact contacts = {contacts} getContactId = {removeContactHandler}/>
    </div>
  );
}

export default App;
