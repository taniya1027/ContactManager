import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div className = "container mt-5">
               <div className = "form-group">
                    <label className = "col-md-6">Name</label>
                    <input className = "form-control m-2 " placeholder = "Enter Name"></input>
                    <label className = "col-sm-4 col-md-6 mt-3">Email</label>
                    <input className = "form-control m-2" type = "email" placeholder = "Enter Email"></input>
                    <div className = "text-center mt-5">
                    <button className = "btn btn-primary ">submit</button>
                    </div>
                </div>
               
            </div>
            
        )
    }
}
 export default Form
