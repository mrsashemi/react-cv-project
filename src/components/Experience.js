import React from "react";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

export function ExperienceForm(props) {
    return (
        <div>
            <form onSubmit={props.onSubmitExp}>
                <br></br><label htmlFor="experienceInput">Experience: </label><br></br>
                <input 
                    onChange={props.handleExp} 
                    value={props.experience.position} 
                    name="position"  
                    type="text" 
                    id="positionInput" 
                    placeholder='Position' 
                /><br></br>
                <input 
                    onChange={props.handleExp} 
                    value={props.experience.company} 
                    name="company"  
                    type="text" 
                    id="companyInput" 
                    placeholder='Company' 
                /><br></br>
                <input 
                    onChange={props.handleExp} 
                    value={props.experience.city} 
                    name="city"  
                    type="text" 
                    id="cityInput" 
                    placeholder='City' 
                /><br></br>
                <input 
                    onChange={props.handleExp} 
                    value={props.experience.start} 
                    name="start"  
                    type="text" 
                    id="startDateInput" 
                    placeholder='Start Date' 
                /><br></br>
                <input 
                    onChange={props.handleExp} 
                    value={props.experience.end} 
                    name="end" 
                    type="text" 
                    id="endDateInput" 
                    placeholder='End Date' 
                /><br></br>
                <input 
                    onChange={props.handleBullets} 
                    value={props.experience.bullet.text}  
                    type="text" 
                    id="describeDutiesInput" 
                    placeholder='Description Point' 
                /><br></br>

                <button onClick={props.addBullet} type="button">Add Bullet Point</button><br></br>
                <button onClick={props.deleteBullet} type="button">Delete Last Bullet Point</button><br></br>
                <button type="submit">Add Experience</button><br></br>
                <button onClick={props.deleteExp} type="button">Delete Last Experience</button>
            </form>
        </div>
    );
}


export function ExperienceInfo(props) {
    return (
        <div className='experiencePoint'>
            <div className="hidden" ref={props.hidden}>
                <h4>{props.experience.company} / {props.experience.position}</h4>
                <h6>{props.experience.start} - {props.experience.end} / {props.experience.city}</h6>
                <ul>
                    {props.experience.bullets.map((bullet) => {
                        return <li key={bullet.id}>{bullet.text}</li>
                    })}
                </ul>
            </div>
            {props.experiences.map((experience) => {
                return (
                    <div key={experience.id}>
                        <h4 className="inlineText"><EditText id="experienceCompany" defaultValue={experience.company} inline /> /&nbsp;
                        <EditText id="experiencePosition" defaultValue={experience.position} inline />
                        </h4><br></br>
                        <h6 className="inlineText"><EditText id="experienceStart" defaultValue={experience.start} inline /> - 
                        <EditText id="experienceEnd" defaultValue={experience.end} inline /> /&nbsp; 
                        <EditText id="experienceCity" defaultValue={experience.city} inline />
                        </h6>
                        <ul>
                            {experience.bullets.map((bullet) => {
                                return <li key={bullet.id}><EditText id="bulletText" defaultValue={bullet.text} inline /></li>
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};



