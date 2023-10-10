import React from "react";

class GeneralInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            submitted: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value})
    handleEdit(e){
        e.preventDefault()
        this.setState({
            submitted: false
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({
            firstName: e.target.firstName.value, 
            lastName: e.target.lastName.value, 
            phone: e.target.phone.value, 
            email: e.target.email.value, 
            submitted: true
        })
    }


    render() {

        const {
            firstName,
            lastName, 
            email,
            phone
        } = this.state

        if (this.state.submitted === false) {

            return(
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text' name='firstName' placeholder="First Name" value={firstName} onChange={this.onChange}/>
                        <input type='text' name="lastName" placeholder="Last Name" value={lastName} onChange={this.onChange}/>
                    </div>
                    <div>
                        <input type='email' name="email" placeholder="email" value={email} onChange={this.onChange}/>
                    </div>
                    <div>
                        <input type='text' name="phone" placeholder="phone" value={phone} onChange={this.onChange}/>
                    </div>
                    <div>
                        <input type='submit' value='Submit'/>
                    </div>
                </form>
            )
        }

        else {
            return (
                <div>
                    <div>
                        <h1>{this.state.firstName} {this.state.lastName}</h1>
                    </div>
                    <div>
                        <p>{this.state.email}</p>
                    </div>
                    <div>
                        <p>{this.state.phone}</p>
                    </div>
                    <div>
                        <input type='button' value='Edit' onClick={this.handleEdit}/>
                    </div>
                </div>
            )
        }
    }
}

export default GeneralInfo