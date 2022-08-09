import React, { Component } from "react";

class ExperienceForm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <br></br><label htmlFor="experienceInput">Experience: </label><br></br>
                <input type="text" id="positionInput" placeholder='Position' /><br></br>
                <input type="text" id="companyInput" placeholder='Company' /><br></br>
                <input type="text" id="cityInput" placeholder='City' /><br></br>
                <input type="text" id="startDateInput" placeholder='Start Date' /><br></br>
                <input type="text" id="endDateInput" placeholder='End Date' /><br></br>
                <input type="text" id="describeDutiesInput" placeholder='Description Point' /><br></br>
                <button>Add Bullet Point</button>
            </div>
        );
    }
}

export default ExperienceForm;