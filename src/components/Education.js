import React, { Component } from "react";

export class EducationForm extends Component {
    constructor() {
        super();
    }

    render() {
        const { education } = this.props;

        return (
            <div>
                <form onSubmit={this.props.onSubmitEdu}>
                    <br></br><label htmlFor="educationInput">Education: </label><br></br>
                    <input onChange={this.props.handleEdu} value={education.college} name="college" type="text" id="collegeInput" placeholder='University' /><br></br>
                    <input onChange={this.props.handleEdu} value={education.collegeCity} name="collegeCity" type="text" id="collegeCityInput" placeholder='City' /><br></br>
                    <input onChange={this.props.handleEdu} value={education.degree} name="degree" type="text" id="degreeInput" placeholder='Degree' /><br></br>
                    <input onChange={this.props.handleEdu} value={education.major} name="major" type="text" id="majorInput" placeholder='Major' /><br></br>
                    <input onChange={this.props.handleEdu} value={education.minor} name="minor" type="text" id="minorInput" placeholder='Minor' /><br></br>
                    <input onChange={this.props.handleEdu} value={education.collegeStart} name="collegeStart" type="text" id="collegeStartInput" placeholder='Start Date' /><br></br>
                    <input onChange={this.props.handleEdu} value={education.collegeEnd} name="collegeEnd" type="text" id="collegeEndInput" placeholder='End Date' /><br></br>
                    <br></br><button type="submit">Add Education</button>
                </form>
            </div>
        );
    }
}

export class EducationInfo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { educations, education } = this.props;

        return (
            <div className='educationPoint'>
                <div className="hidden" ref={this.props.hiddenEdu}>
                    <h3>{education.degree} in {education.major} {education.minor !== '' && <h3>with minors in {education.minor}</h3>}</h3>
                    <h4>{education.college} in {education.collegeCity}</h4>
                    <h5>{education.collegeStart} to {education.collegeEnd}</h5>
                </div>
                {educations.map((education) => {
                    return (
                        <div key={education.id}>
                            <h3>{education.degree} in {education.major} {education.minor !== '' && <h3>with minors in {education.minor}</h3>}</h3>
                            <h4>{education.college} in {education.collegeCity}</h4>
                            <h5>{education.collegeStart} to {education.collegeEnd}</h5>
                        </div>
                    );
                })}
            </div>
        );
    };
}

