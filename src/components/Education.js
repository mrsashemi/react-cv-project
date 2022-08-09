import React, { Component } from "react";

class EducationForm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <br></br><label htmlFor="experienceInput">Education: </label><br></br>
                <input type="text" id="collegeInput" placeholder='University' /><br></br>
                <input type="text" id="collegeCityInput" placeholder='City' /><br></br>
                <input type="text" id="degreeInput" placeholder='Degree' /><br></br>
                <input type="text" id="majorInput" placeholder='Major' /><br></br>
                <input type="text" id="minorInput" placeholder='Minor' /><br></br>
                <input type="text" id="collegeStartInput" placeholder='Start Date' /><br></br>
                <input type="text" id="collegeEndInput" placeholder='End Date' /><br></br>
            </div>
        );
    }
}

export default EducationForm;