import React from 'react'
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

        <div>
            {renderlist}
        </div>
    )
}

export default Contact
