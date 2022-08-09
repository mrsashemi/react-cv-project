import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ExperienceForm from './components/Experience';
import EducationForm from './components/Education';
import ContactForm from './components/Contact';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: ''},
      tasks: [],
    }
  }
  render() {
    const { task, tasks } = this.state;

    return (
      <div className='container'>
        <div className='CVForm'>
          <form>
            <ContactForm />
            <ExperienceForm />
            <EducationForm />
            <br></br><button type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className='generatedCV'>
          <div className='personalInfo'>
            <h1>Full Name</h1>
            <h4>Address</h4>
            <h4>Phone Number</h4>
            <h4>Email</h4>
            <div>Objective Statement</div>
          </div>
          <div className='experienceInfo'>
            <h2>Experience</h2>
            <div className='experiencePoint'>
              <h3>Position</h3>
              <h4>Company Name and City</h4>
              <h5>Start Date to End Date</h5>
              <div>Description</div>
            </div>
          </div>
          <div className='educationInfo'>
            <h2>Education</h2>
            <div className='educationPoint'>
              <h3>Degree Received</h3>
              <h4>University Name and City</h4>
              <h5>Start Date to End Date</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
