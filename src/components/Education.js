import React from "react";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

export function EducationForm(props) {
    return (
        <div>
            <form onSubmit={props.onSubmitEdu}>
                <br></br><label htmlFor="educationInput">Education: </label><br></br>
                <input 
                    onChange={props.handleEdu} 
                    value={props.education.college} 
                    name="college" 
                    type="text" 
                    id="collegeInput" 
                    placeholder='University or Institution' 
                /><br></br>
                <input 
                    onChange={props.handleEdu} 
                    value={props.education.collegeCity} 
                    name="collegeCity" 
                    type="text" 
                    id="collegeCityInput" 
                    placeholder='City' 
                /><br></br>
                <input 
                    onChange={props.handleEdu} 
                    value={props.education.degree} 
                    name="degree" 
                    type="text" 
                    id="degreeInput" 
                    placeholder='Degree or Certificate' 
                /><br></br>
                <input 
                    onChange={props.handleEdu} 
                    value={props.education.major} 
                    name="major" 
                    type="text" 
                    id="majorInput" 
                    placeholder='Major' 
                /><br></br>
                <input 
                    onChange={props.handleEdu} 
                    value={props.education.minor} 
                    name="minor" 
                    type="text" 
                    id="minorInput" 
                    placeholder='Minor' 
                /><br></br>
                <input 
                    onChange={props.handleEdu} 
                    value={props.education.collegeStart} 
                    name="collegeStart" 
                    type="text" 
                    id="collegeStartInput" 
                    placeholder='Start Date' 
                /><br></br>
                <input 
                    onChange={props.handleEdu} 
                    value={props.education.collegeEnd} 
                    name="collegeEnd" 
                    type="text" 
                    id="collegeEndInput" 
                    placeholder='End Date' 
                /><br></br>
                <input 
                    onChange={props.handleEduNotes} 
                    value={props.education.note.text}  
                    type="text" 
                    id="notableClasses" 
                    placeholder='Class or Accolade' 
                /><br></br>

                <button onClick={props.addEduNote} type="button">Add Notable Achievements</button><br></br>
                <button onClick={props.deleteEduNote} type="button">Delete Last Note</button><br></br>
                <button type="submit">Add Education</button><br></br>
                <button onClick={props.deleteEdu} type="button">Delete Last Education</button><br></br>
            </form>
        </div>
    );
}


export function EducationInfo(props) {
    return (
        <div className='educationPoint'>
            <div className="hidden" ref={props.hiddenEdu}>
                <h4 className="inlineText">{props.education.college} / {props.education.degree} in {props.education.major} </h4> 
                {props.education.minor !== '' && <h5 className="inlineText"> with minors in {props.education.minor}</h5>}
                <h6>{props.education.collegeStart} - {props.education.collegeEnd} / {props.education.collegeCity}</h6>
                <ul>
                    {props.education.notes.map((note) => {
                        return <li key={note.id}>{note.text}</li>
                    })}
                </ul>
            </div>
            {props.educations.map((education) => {
                return (
                    <div key={education.id}>
                        <h4 className="inlineText"><EditText id="educationCollege" defaultValue={education.college} inline /> /&nbsp;
                        <EditText id="educationDegree" defaultValue={education.degree} inline /> in 
                        <EditText id="educationMajor" defaultValue={education.Major} inline />  
                        </h4> 
                        {education.minor !== '' && <h5 className="inlineText"> with minors in&nbsp; 
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

