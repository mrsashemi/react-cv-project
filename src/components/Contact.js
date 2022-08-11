import React, { Component } from "react";
import uniqid from "uniqid";
import '../App.css'

export class ContactForm extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { jobSeeker, keyword, contactText } = this.props;

        return (
            <div>
                <form onSubmit={this.props.onSubmitContact}>
                    <label htmlFor="contactInput">Personal Information: </label><br></br>
                    <input onChange={this.props.handleChange} value={jobSeeker.firstName} name="firstName" type="text" id="firstNameInput" placeholder='First Name' /><br></br>
                    <input onChange={this.props.handleChange} value={jobSeeker.lastName} name="lastName" type="text" id="lastNameInput" placeholder='Last Name' /><br></br>
                    <input onChange={this.props.handleChange} value={jobSeeker.address} name="address" type="text" id="addressInput" placeholder='Address or City' /><br></br>
                    <input onChange={this.props.handleChange} value={jobSeeker.phone} name="phone" type="tel" id="phoneInput" placeholder='Phone Number' /><br></br>
                    <input onChange={this.props.handleChange} value={jobSeeker.email} name="email" type="email" id="emailInput" placeholder='Email' /><br></br>
                    <textarea onChange={this.props.handleChange} value={jobSeeker.objective} name="objective" id="objectiveInput" placeholder='Objective Statement' rows="4" maxLength="150" /><br></br>
                    <input onChange={this.props.handleKeywords} value={keyword.text} type="text" id="keywordInput" placeholder='Keywords' /><br></br>
                    <button onClick={this.props.addKeyword} type="button" >Add Keyword</button><br></br>
                    <br></br><button type="submit">{contactText}</button>
                </form>
            </div>
        );
    }
}

export class ContactInfo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { jobSeeker, keywords } = this.props;

        return (
            <div className='personalInfo'>
                <h1>{jobSeeker.firstName} {jobSeeker.lastName}</h1>
                <h4>{jobSeeker.address}</h4>
                <h4>{jobSeeker.phone}</h4>
                <h4>{jobSeeker.email}</h4>
                <div className="objective">{jobSeeker.objective}</div>
                <ul>
                    {keywords.map((keyword) => {
                        return <li key={keyword.id}>{keyword.text}</li>
                    })}
                </ul>
            </div>
        );
    };
}


