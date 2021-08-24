import React from 'react';
import user from "../Images/user.png";

function ContactCard(props) {
    const {name, email} = props.contact;
    return (
        
        <li className="list-group-item d-flex justify-content-between">
        <div className = "content">
        <img src = {user} alt = "user" /> <b>{name} </b>&nbsp; {email} 
        </div>
        <div className = "pt-2">
        <i className = "fa fa-trash" style = {{color : "red", size : "64px"}}></i>
        </div>
        </li>
       
    )
}

export default ContactCard
