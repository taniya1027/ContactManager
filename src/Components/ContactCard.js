import React from 'react';
import {Link} from "react-router-dom";
import user from "../Images/user.png";

function ContactCard(props) {
    const {id, name, email} = props.contact;
    return (
        
        <li className="list-group-item d-flex justify-content-between">
        <div className = "content">
        
        <img src = {user} alt = "user" /> 
        <Link to = {{pathname : "/contact/${id}", state : {contact : props.contact}}}>
        <b>{name} </b>&nbsp; {email} 
        </Link>
        </div>
        <div className = "pt-2">
        <i className = "fas fa-edit " style = {{color : "red", size : "150px", marginRight : "50px"}}
          onClick = {() => props.clickHandler(id)}
        ></i>

        <i className = "fa fa-trash" style = {{color : "red", size : "150px"}}
          onClick = {() => props.clickHandler(id)}
        ></i>
        
        </div>
        </li>
        
    )
}

export default ContactCard
