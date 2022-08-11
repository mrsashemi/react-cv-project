import './App.css';
import React, { Component } from 'react';
import { ExperienceForm, ExperienceInfo } from './components/Experience';
import { EducationForm, EducationInfo } from './components/Education';
import { ContactForm, ContactInfo } from './components/Contact';
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      onChange: true,
      contactText: "Submit Personal Info",
      jobSeeker: {
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        email: '',
        objective: '',
      },
      keyword: {
        text: '',
        id: uniqid()
      },
      keywords: [],
      experience: {
        position: '',
        company: '',
        city: '',
        start: '',
        end: '',
        id: uniqid(),
        bullet: {
          text: '',
          id: uniqid()
        },
        bullets: []
      },
      experiences: [],
      education: {
        college: '',
        collegeCity: '',
        degree: '',
        major: '',
        minor: '',
        collegeStart: '',
        collegeEnd: '',
        id: uniqid()
      },
      educations: []
    };
  }

  hidden = React.createRef();
  hiddenEdu = React.createRef();

  handleChange = (e) => {
    const { name, value } = e.target;

    if (this.state.onChange) {
      this.setState(prevState => ({
        jobSeeker: {...prevState.jobSeeker, [name]: value},
      }));
    }
  };

  handleExp = (e) => {
    this.hidden.current.className = "active";
    const { name, value } = e.target;

    this.setState(prevState => ({
      experience: {...prevState.experience, [name]: value},
    }));
  };

  handleEdu = (e) => {
    this.hiddenEdu.current.className = "active";
    const { name, value } = e.target;

    this.setState(prevState => ({
      education: {...prevState.education, [name]: value},
    }));
  }

  handleKeywords = (e) => {
    this.setState({
      keyword: {
          text: e.target.value,
          id: this.state.keyword.id,
      },
    });
  }

  handleBullets = (e) => {
    this.setState(prevState => ({
      experience: {
        ...prevState.experience, 
        bullet: {
          text: e.target.value,
          id: this.state.experience.bullet.id,
        }
      },
    }));
  }

  onSubmitContact = (e) => {
    e.preventDefault();
    if (this.state.onChange) {
      this.setState({
        jobSeeker: {
          firstName: this.state.jobSeeker.firstName,
          lastName: this.state.jobSeeker.lastName,
          address: this.state.jobSeeker.address,
          phone: this.state.jobSeeker.phone,
          email: this.state.jobSeeker.email,
          objective: this.state.jobSeeker.objective,
        },
      });
      this.state.onChange = false;
      this.state.contactText = "Edit Info"
    } else if (!this.state.onChange) {
      this.state.contactText = "Submit Personal Info"
      this.state.onChange = true;
    }
  };

  onSubmitExp = (e) => {
    e.preventDefault();
    this.hidden.current.className = "hidden";
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        position: '',
        company: '',
        city: '',
        start: '',
        end: '',
        id: uniqid(),
        bullet: {
          text: '',
          id: uniqid()
        },
        bullets: []
      },
    });
  };

  onSubmitEdu = (e) => {
    e.preventDefault();
    this.hiddenEdu.current.className = "hidden";
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: {
        college: '',
        collegeCity: '',
        degree: '',
        major: '',
        minor: '',
        collegeStart: '',
        collegeEnd: '',
        id: uniqid()
      },
    });
  };

  addKeyword = (e) => {
    this.setState({
      keywords: this.state.keywords.concat(this.state.keyword),
      keyword: {
          text: '',
          id: uniqid()
      },
    });
  };

  addBullet = (e) => {
    this.hidden.current.className = "active";
    this.setState(prevState => ({
      experience: {
        ...prevState.experience,
        bullets: this.state.experience.bullets.concat(this.state.experience.bullet),
        bullet: {
          text: '',
          id: uniqid()
        }
      }
    }));
  };


  render() {
    const { jobSeeker, keyword, keywords, experiences, experience, contactText, education, educations } = this.state;

    return (
      <div className='container'>
        <div className='CVForm'>
          <div>
            <ContactForm 
              handleChange={this.handleChange} 
              handleKeywords={this.handleKeywords} 
              onSubmitContact={this.onSubmitContact}
              addKeyword={this.addKeyword} 
              jobSeeker={jobSeeker} 
              keyword={keyword}
              contactText={contactText}
            />
            <ExperienceForm 
              handleExp={this.handleExp} 
              handleBullets={this.handleBullets}
              addBullet={this.addBullet}
              onSubmitExp={this.onSubmitExp}
              experience={experience} 
            />
            <EducationForm
              handleEdu={this.handleEdu}
              onSubmitEdu={this.onSubmitEdu}
              education={education}
            />
          </div>
        </div>
        <div className='generatedCV'>
          <ContactInfo jobSeeker={jobSeeker} keywords={keywords}  />
          <div className='experienceInfo'>
            <h2>Experience</h2>
            <ExperienceInfo 
              experiences={experiences} 
              experience={experience} 
              hidden={this.hidden}
            />
          </div>
          <div className='educationInfo'>
            <h2>Education</h2>
            <EducationInfo 
              education={education}
              educations={educations}
              hiddenEdu={this.hiddenEdu}
            />
          </div>
        </div>
      </div>
    );
  }
}



export default App;
