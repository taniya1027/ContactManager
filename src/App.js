import React from "react";
import {useState, useEffect } from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import {uuid} from "uuidv4";
import Form from "./Components/AddContact";
import Header from "./Components/Header";
import Contact from "./Components/ContactList";
import ContactDetail from "./Components/ContactDetail";
import api from "./api/contacts";

function App() {
  const Local_Storage_Key = "contacts";
  const [contacts,setContacts] = useState([]);
  
  const addContact = async (contact) =>{
      console.log(contacts);
      const request = {
        id : uuid(),
        ...contact
      }

      const response = await api.post("/contacts",request);
      setContacts([...contacts,response.data]);
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }
  
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };
  useEffect(() => {
    // const retrieveContact = JSON.parse(localStorage.getItem(Local_Storage_Key));
    // if(retrieveContact) setContacts(retrieveContact)
    const getAllContacts = async () =>{
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
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

      <Route path = "/contact/:id" component = {ContactDetail} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
