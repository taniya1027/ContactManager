import React from 'react';
import {Link} from "react-router-dom";
import user from "../Images/user.jpg";

function ContactDetail(props) {
   const {name, email} = props.location.state.contact;
    return (
        <div>
        <div className="card " style={{width: '288px', margin : "auto", marginTop : "50px"}} >
             <img className="card-img-top" src= {user} alt="Card image cap"/>
             <div className="card-body">
                  <p className="card-text">
                     <h3>{name}</h3>
                     <email>{email}</email>
                  </p>
             </div>
           
        </div>
        <div className = "text-center m-4"><Link to = "/"><div className = "btn btn-primary" >Back to Contact List</div></Link></div>
        </div> 
    )
}

export default ContactDetail
