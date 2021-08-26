import React from 'react'
import {Link} from "react-router-dom"
import ContactCard from './ContactCard'

function Contact(props) {
    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    };

   
    const renderlist = props.contacts.map((contact) => {
        return (
          <ContactCard contact = {contact} clickHandler = {deleteContactHandler} key = {contact.id}/>
        )
    })
    return (

        <div >
        <h1 className = "m-4 pb -4">Contact List
        <Link to = "/add"><button className = " btn btn-primary float-right">Add Contact</button></Link>
        </h1>
           
            {renderlist}
         </div>
    )
}

export default Contact
