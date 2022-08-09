import React, { Component } from "react";

export class ExperienceForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { experience } = this.props;

        return (
            <div>
                <form onSubmit={this.props.onSubmitExp}>
                    <br></br><label htmlFor="experienceInput">Experience: </label><br></br>
                    <input onChange={this.props.handleExp} value={experience.position} name="position"  type="text" id="positionInput" placeholder='Position' /><br></br>
                    <input onChange={this.props.handleExp} value={experience.company} name="company"  type="text" id="companyInput" placeholder='Company' /><br></br>
                    <input onChange={this.props.handleExp} value={experience.city} name="city"  type="text" id="cityInput" placeholder='City' /><br></br>
                    <input onChange={this.props.handleExp} value={experience.start} name="start"  type="text" id="startDateInput" placeholder='Start Date' /><br></br>
                    <input onChange={this.props.handleExp} value={experience.end} name="end" type="text" id="endDateInput" placeholder='End Date' /><br></br>
                    <input onChange={this.props.handleBullets} value={experience.bullet.text}  type="text" id="describeDutiesInput" placeholder='Description Point' /><br></br>
                    <button onClick={this.props.addBullet}>Add Bullet Point</button>
                    <br></br><button type="submit">Add Experience</button>
                </form>
            </div>
        );
    }
}

export class ExperienceInfo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { experiences  } = this.props;

        return (
            <div className='experiencePoint'>
                {experiences.map((experience) => {
                    <div>
                        <h3>{experience.position}</h3>
                        <h4>{experience.company} in {experience.city}</h4>
                        <h5>{experience.start} to {experience.end}</h5>
                        <ul>
                            {experience.bullets.map((bullet) => {
                                return <li key={bullet.id}>{bullet.text}</li>
                            })}
                        </ul>
                    </div>
                })}
            </div>
        );
    };
}


