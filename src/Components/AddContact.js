import React, { Component } from 'react'

class Form extends Component {
    state = {
        name: "",
        email: "",
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("all the fields are mandatory");
            return;
        }
        this.props.addContacthandler(this.state);
        this.setState({name: "", email : ""});
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="container mt-5">
                <h1 className="ml-3 mb-3">Add Contact</h1>
                <form className="form-group" onSubmit={this.add}>
                <label className="col-md-6">Name</label>
                <input className="form-control m-2 " type="text"  name = "name" placeholder = "Enter name" value={this.state.name} onChange={(e) =>
                    this.setState({ name: e.target.value})}></input>
                <label className="col-sm-4 col-md-6 mt-3">Email</label>
                        <input className="form-control m-2" type="email" name = "email" placeholder="Enter Email" value={this.state.email} onChange={(e) =>
                            this.setState({ email: e.target.value })}></input>
                    <div className="text-center mt-3 pb-4">
                        <button className="btn btn-primary ">Add</button>
                    </div>
                </form>

            </div>

        )
    }
}
export default Form
