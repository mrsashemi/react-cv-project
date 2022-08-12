import React, { Component } from "react";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

export class EducationForm extends Component {
    render() {
        const { education } = this.props;

        return (
            <div>
                <form onSubmit={this.props.onSubmitEdu}>
                    <br></br><label htmlFor="educationInput">Education: </label><br></br>
                    <input 
                        onChange={this.props.handleEdu} 
                        value={education.college} 
                        name="college" 
                        type="text" 
                        id="collegeInput" 
                        placeholder='University or Institution' 
                    /><br></br>
                    <input 
                        onChange={this.props.handleEdu} 
                        value={education.collegeCity} 
                        name="collegeCity" 
                        type="text" 
                        id="collegeCityInput" 
                        placeholder='City' 
                    /><br></br>
                    <input 
                        onChange={this.props.handleEdu} 
                        value={education.degree} 
                        name="degree" 
                        type="text" 
                        id="degreeInput" 
                        placeholder='Degree or Certificate' 
                    /><br></br>
                    <input 
                        onChange={this.props.handleEdu} 
                        value={education.major} 
                        name="major" 
                        type="text" 
                        id="majorInput" 
                        placeholder='Major' 
                    /><br></br>
                    <input 
                        onChange={this.props.handleEdu} 
                        value={education.minor} 
                        name="minor" 
                        type="text" 
                        id="minorInput" 
                        placeholder='Minor' 
                    /><br></br>
                    <input 
                        onChange={this.props.handleEdu} 
                        value={education.collegeStart} 
                        name="collegeStart" 
                        type="text" 
                        id="collegeStartInput" 
                        placeholder='Start Date' 
                    /><br></br>
                    <input 
                        onChange={this.props.handleEdu} 
                        value={education.collegeEnd} 
                        name="collegeEnd" 
                        type="text" 
                        id="collegeEndInput" 
                        placeholder='End Date' 
                    /><br></br>
                    <input 
                        onChange={this.props.handleEduNotes} 
                        value={education.note.text}  
                        type="text" 
                        id="notableClasses" 
                        placeholder='Class or Accolade' 
                    /><br></br>

                    <button onClick={this.props.addEduNote} type="button">Add Notable Achievements</button><br></br>
                    <button onClick={this.props.deleteEduNote} type="button">Delete Last Note</button><br></br><br></br>
                    <button type="submit">Add Education</button><br></br>
                    <button onClick={this.props.deleteEdu} type="button">Delete Last Education</button><br></br>
                </form>
            </div>
        );
    }
}

export class EducationInfo extends Component {
    render() {
        const { educations, education } = this.props;

        return (
            <div className='educationPoint'>
                <div className="hidden" ref={this.props.hiddenEdu}>
                    <h4 className="inlineText">{education.college} / {education.degree} in {education.major} </h4> 
                    {education.minor !== '' && <h5 className="inlineText"> with minors in {education.minor}</h5>}
                    <h6>{education.collegeStart} - {education.collegeEnd} / {education.collegeCity}</h6>
                    <ul>
                        {education.notes.map((note) => {
                            return <li key={note.id}>{note.text}</li>
                        })}
                    </ul>
                </div>
                {educations.map((education) => {
                    return (
                        <div key={education.id}>
                            <h4 className="inlineText"><EditText id="educationCollege" defaultValue={education.college} inline /> /&nbsp;
                            <EditText id="educationDegree" defaultValue={education.degree} inline /> in 
                            <EditText id="educationMajor" defaultValue={education.Major} inline />  
                            </h4> 
                            {education.minor !== '' && <h5 className="inlineText"> with minors in 
                            <EditText id="educationMinor" defaultValue={education.minor} inline /></h5>}
                            <h6><EditText id="educationStart" defaultValue={education.collegeStart} inline /> -&nbsp;
                            <EditText id="educationEnd" defaultValue={education.collegeEnd} inline /> /&nbsp;
                            <EditText id="educationCity" defaultValue={education.collegeCity} inline />
                            </h6>
                            <ul>
                                {education.notes.map((note) => {
                                    return <li key={note.id}><EditText id="noteText" defaultValue={note.text} inline /></li>
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    };
}

