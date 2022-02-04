import React from 'react'

class Education extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            schoolName: '',
            degree: '',
            year: '',
            GPA: '', 
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
            schoolName: e.target.schoolName.value, 
            degree: e.target.degree.value, 
            year: e.target.year.value, 
            GPA: e.target.GPA.value, 
            submitted: true
        })
    }

    render() {

        const {
            schoolName,
            degree, 
            year, 
            GPA
        } = this.state


        if (this.state.submitted === false){
            return(
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type='text' name="schoolName" placeholder="School Name" value={schoolName} onChange={this.onChange}/>
                    <input type='text' name="degree" placeholder="Degree" value={degree} onChange={this.onChange}/>
                    <input type='text' name="year" placeholder="Years of Study" value={year} onChange={this.onChange}/>
                    <input type='text' name="GPA" placeholder="GPA" value={GPA} onChange={this.onChange}/>
                    </div>
                    <input type='submit' value='Submit'/>
                </form>
            )
        }

        else {
            return(
                <div>
                <div>
                    <h3>{this.state.schoolName}</h3>
                    <p>{this.state.degree}</p>
                    <p>{this.state.year}</p>
                    <p>{this.state.GPA}</p>
                </div>
                <div>
                    <input type='button' value='Edit' onClick={this.handleEdit}/>
                </div>
            </div>
            )
        }
    }
}

export default Education