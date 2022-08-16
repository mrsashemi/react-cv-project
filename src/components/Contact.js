import React from "react";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

export function ContactForm(props) {
    return (
        <div>
            <form onSubmit={props.onSubmitContact}>
                <label htmlFor="contactInput">Personal Information: </label><br></br>
                <input 
                    onChange={props.handleChange} 
                    value={props.jobSeeker.firstName} name="firstName" 
                    type="text" id="firstNameInput" 
                    placeholder='First Name' 
                /><br></br>
                <input 
                    onChange={props.handleChange} 
                    value={props.jobSeeker.lastName} name="lastName" 
                    type="text" id="lastNameInput" 
                    placeholder='Last Name' 
                /><br></br>
                <input 
                    onChange={props.handleChange} 
                    value={props.jobSeeker.address} name="address" 
                    type="text" id="addressInput" 
                    placeholder='Address or City' 
                /><br></br>
                <input 
                    onChange={props.handleChange} 
                    value={props.jobSeeker.phone} 
                    name="phone" type="tel" 
                    id="phoneInput" 
                    placeholder='Phone Number' 
                /><br></br>
                <input 
                    onChange={props.handleChange} 
                    value={props.jobSeeker.email} 
                    name="email" 
                    type="email" 
                    id="emailInput" 
                    placeholder='Email' 
                /><br></br>
                <textarea 
                    onChange={props.handleChange} 
                    value={props.jobSeeker.objective} name="objective" 
                    id="objectiveInput" placeholder='Objective Statement' 
                    rows="4" 
                    maxLength="300" 
                /><br></br>
                <input 
                    onChange={props.handleKeywords} 
                    value={props.keyword.text} 
                    type="text" 
                    id="keywordInput" 
                    placeholder='Keywords' 
                /><br></br>

                <button onClick={props.addKeyword} type="button">Add Keyword</button><br></br>
                <button onClick={props.deleteKeyword} type="button">Delete Last Keyword</button><br></br>
                <button type="submit">{props.contactText}</button>
            </form>
        </div>
    );
}

export function ContactInfo(props) {
    return (
        <div className='personalInfo'>
            <h1>{props.jobSeeker.firstName} {props.jobSeeker.lastName}</h1>
            <h4>{props.jobSeeker.address}</h4>
            <h5>{props.jobSeeker.phone}</h5>
            <h5>{props.jobSeeker.email}</h5>
            <div className="objective">{props.jobSeeker.objective}</div>
            <ul>
                {props.keywords.map((keyword) => {
                    return <li key={keyword.id}><EditText id="keywordText" defaultValue={keyword.text} inline /></li>
                })}
            </ul>
        </div>
    );
};



