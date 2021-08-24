import React from 'react'
import ContactCard from './ContactCard'

function Contact(props) {
    const renderlist = props.contacts.map((contact) => {
        return (
          <ContactCard contact = {contact}/>
        )
    })
    return (

        <div>
            {renderlist}
        </div>
    )
}

export default Contact
