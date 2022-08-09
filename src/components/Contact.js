import React, { Component } from "react";

class ContactForm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <label htmlFor="contactInput">Personal Information: </label><br></br>
                <input type="text" id="firstNameInput" placeholder='First Name' /><br></br>
                <input type="text" id="lastNameInput" placeholder='Last Name' /><br></br>
                <input type="text" id="addressInput" placeholder='Address' /><br></br>
                <input type="tel" id="phoneInput" placeholder='Phone Number' /><br></br>
                <input type="email" id="emailInput" placeholder='Email' /><br></br>
                <textarea id="objectiveInput" placeholder='Objective Statement' rows="4" maxLength="50" /><br></br>
                <input type="text" id="keywordInput" placeholder='Keywords' /><br></br>
                <button>Add Keyword</button>
            </div>
        );
    }
}

export default ContactForm;