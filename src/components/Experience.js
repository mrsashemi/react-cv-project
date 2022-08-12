import React, { Component } from "react";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

export class ExperienceForm extends Component {
    render() {
        const { experience } = this.props;

        return (
            <div>
                <form onSubmit={this.props.onSubmitExp}>
                    <br></br><label htmlFor="experienceInput">Experience: </label><br></br>
                    <input 
                        onChange={this.props.handleExp} 
                        value={experience.position} 
                        name="position"  
                        type="text" 
                        id="positionInput" 
                        placeholder='Position' 
                    /><br></br>
                    <input 
                        onChange={this.props.handleExp} 
                        value={experience.company} 
                        name="company"  
                        type="text" 
                        id="companyInput" 
                        placeholder='Company' 
                    /><br></br>
                    <input 
                        onChange={this.props.handleExp} 
                        value={experience.city} 
                        name="city"  
                        type="text" 
                        id="cityInput" 
                        placeholder='City' 
                    /><br></br>
                    <input 
                        onChange={this.props.handleExp} 
                        value={experience.start} 
                        name="start"  
                        type="text" 
                        id="startDateInput" 
                        placeholder='Start Date' 
                    /><br></br>
                    <input 
                        onChange={this.props.handleExp} 
                        value={experience.end} 
                        name="end" 
                        type="text" 
                        id="endDateInput" 
                        placeholder='End Date' 
                    /><br></br>
                    <input 
                        onChange={this.props.handleBullets} 
                        value={experience.bullet.text}  
                        type="text" 
                        id="describeDutiesInput" 
                        placeholder='Description Point' 
                    /><br></br>

                    <button onClick={this.props.addBullet} type="button">Add Bullet Point</button><br></br>
                    <button onClick={this.props.deleteBullet} type="button">Delete Last Bullet Point</button><br></br><br></br>
                    <button type="submit">Add Experience</button><br></br>
                    <button onClick={this.props.deleteExp} type="button">Delete Last Experience</button>
                </form>
            </div>
        );
    }
}

export class ExperienceInfo extends Component {
    render() {
        const { experiences, experience } = this.props;

        return (
            <div className='experiencePoint'>
                <div className="hidden" ref={this.props.hidden}>
                    <h4>{experience.company} / {experience.position}</h4>
                    <h6>{experience.start} - {experience.end} / {experience.city}</h6>
                    <ul>
                        {experience.bullets.map((bullet) => {
                            return <li key={bullet.id}>{bullet.text}</li>
                        })}
                    </ul>
                </div>
                {experiences.map((experience) => {
                    return (
                        <div key={experience.id}>
                            <h4 className="inlineText"><EditText id="experienceCompany" defaultValue={experience.company} inline /> / <EditText id="experiencePosition" defaultValue={experience.position} inline /></h4><br></br>
                            <h6 className="inlineText"><EditText id="experienceStart" defaultValue={experience.start} inline /> - <EditText id="experienceEnd" defaultValue={experience.end} inline /> / <EditText id="experienceCity" defaultValue={experience.city} inline /> </h6>
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
}


