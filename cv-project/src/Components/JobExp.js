import React from "react";

class Jobs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            companyName: '', 
            title: '',
            years: '',
            tasks: '',
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
            companyName: e.target.companyName.value, 
            title: e.target.title.value, 
            years: e.target.years.value, 
            tasks: e.target.tasks.value, 
            submitted: true
        })
    }

    render() {

        const {
            companyName,
            title,
            years, 
            tasks,
        } = this.state

        if (this.state.submitted === false) {
            return(
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text' name='companyName' placeholder="Company Name" value={companyName} onChange={this.onChange}/>
                        <input type='text' name='years' placeholder="Years" value={years} onChange={this.onChange}/>
                    </div>
                    <div>
                        <input type='text' name='title' placeholder="Job Title" value={title} onChange={this.onChange}/>
                    </div>
                    <div>
                        <textarea name='tasks' placeholder="Job Tasks" rows='6' cols='100' value={tasks} onChange={this.onChange}></textarea>
                    </div>
                    <input type='submit' value='Submit'/>
                </form>

            )
        }

        else {
            return(
                <div>
                    <div>
                        <h3>{this.state.companyName}</h3>
                        <p>{this.state.years}</p>
                    </div>
                    <div>
                        <p>{this.state.title}</p>
                    </div>
                    <div>
                        <p>{this.state.tasks}</p>
                    </div>
                <div>
                    <input type='button' value='Edit' onClick={this.handleEdit}/>
                </div>
            </div>
            )
        }
    }
}

export default Jobs