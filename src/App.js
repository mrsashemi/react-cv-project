import './App.css';
import React, { Component } from 'react';
import { ExperienceForm, ExperienceInfo } from './components/Experience';
import { EducationForm, EducationInfo } from './components/Education';
import { ContactForm, ContactInfo } from './components/Contact';
import ReactToPrint from 'react-to-print';
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      onSubmitInfo: true,
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
        id: uniqid(),
        note: {
          text: '',
          id: uniqid()
        },
        notes: []
      },
      educations: []
    };
  }

  hidden = React.createRef();
  hiddenEdu = React.createRef();
  
  //Create handle functions to preview form values in the CV while typing
  handleChange = (e) => {
    const { name, value } = e.target;

    if (this.state.onSubmitInfo) {
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

  handleEduNotes = (e) => {
    this.setState(prevState => ({
      education: {
        ...prevState.education, 
        note: {
          text: e.target.value,
          id: this.state.education.note.id,
        }
      },
    }));
  }

  //Create onsubmit functions to input form data into the CV
  onSubmitContact = (e) => {
    e.preventDefault();
    if (this.state.onSubmitInfo) {
      this.setState({
        jobSeeker: {
          firstName: this.state.jobSeeker.firstName,
          lastName: this.state.jobSeeker.lastName,
          address: this.state.jobSeeker.address,
          phone: this.state.jobSeeker.phone,
          email: this.state.jobSeeker.email,
          objective: this.state.jobSeeker.objective,
        },
        onSubmitInfo: false,
        contactText: "Edit Info"
      });
    } else if (!this.state.onSubmitInfo) {
      this.setState({
        jobSeeker: {
          firstName: this.state.jobSeeker.firstName,
          lastName: this.state.jobSeeker.lastName,
          address: this.state.jobSeeker.address,
          phone: this.state.jobSeeker.phone,
          email: this.state.jobSeeker.email,
          objective: this.state.jobSeeker.objective,
        },
        onSubmitInfo: true,
        contactText: "Submit Personal Info"
      });
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
        id: uniqid(),
        note: {
          text: '',
          id: uniqid()
        },
        notes: []
      },
    });
  };

  //Create add functions to add bullet points to the CV 
  addKeyword = () => {
    this.setState({
      keywords: this.state.keywords.concat(this.state.keyword),
      keyword: {
          text: '',
          id: uniqid()
      },
    });
  };

  addBullet = () => {
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

  addEduNote = () => {
    this.hiddenEdu.current.className = "active";
    this.setState(prevState => ({
      education: {
        ...prevState.education,
        notes: this.state.education.notes.concat(this.state.education.note),
        note: {
          text: '',
          id: uniqid()
        }
      }
    }));
  };

  //Add delete functionality to remove bullet points or components from various CV sections
  deleteKeyword = () => {
    let keyId;

    if (this.state.keywords.length > 0) keyId = this.state.keywords[this.state.keywords.length - 1].id;
    const filterKeywords = this.state.keywords.filter(k => { return k.id !== keyId });

    this.setState({
      keywords: [...filterKeywords],
      keyword: {
          text: '',
          id: uniqid()
      },
    });
  }

  deleteBullet = () => {
    let bulletId;

    if (this.state.experience.bullets.length > 0) bulletId = this.state.experience.bullets[this.state.experience.bullets.length - 1].id;
    const filterBullets = this.state.experience.bullets.filter(b => { return b.id !== bulletId});

    this.setState(prevState => ({
      experience: {
        ...prevState.experience,
        bullets: [...filterBullets],
        bullet: {
          text: '',
          id: uniqid()
        }
      }
    }));
  }

  deleteEduNote = () => {
    let noteId;

    if (this.state.education.notes.length > 0) noteId = this.state.education.notes[this.state.education.notes.length - 1].id;
    const filterNotes = this.state.education.notes.filter(n => { return n.id !== noteId });

    this.setState(prevState => ({
      education: {
        ...prevState.education,
        notes: [...filterNotes],
        note: {
          text: '',
          id: uniqid()
        }
      }
    }));
  }

  deleteExp = (e) => {
    e.preventDefault();
    let expId;

    if (this.state.experiences.length > 0) expId = this.state.experiences[this.state.experiences.length - 1].id
    const filterExperiences = this.state.experiences.filter(exp => { return exp.id !== expId })

    this.setState({
      experiences: [...filterExperiences],
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
  }

  deleteEdu = (e) => {
    e.preventDefault();
    let eduId;

    if (this.state.educations.length > 0) eduId = this.state.educations[this.state.educations.length - 1].id
    const filterEducations = this.state.educations.filter(edu => { return edu.id !== eduId })

    this.setState({
      educations: [...filterEducations],
      education: {
        college: '',
        collegeCity: '',
        degree: '',
        major: '',
        minor: '',
        collegeStart: '',
        collegeEnd: '',
        id: uniqid(),
        note: {
          text: '',
          id: uniqid()
        },
        notes: []
      },
    });
  }


  render() {
    const { jobSeeker, keyword, keywords, experiences, experience, contactText, education, educations } = this.state;

    return (
      <div className='container'>
        <div className='CVForm'>
          <div className='resumeGenTitle'>Resume Generator</div>
          <div>
            <ContactForm 
              handleChange={this.handleChange} 
              handleKeywords={this.handleKeywords} 
              onSubmitContact={this.onSubmitContact}
              addKeyword={this.addKeyword} 
              deleteKeyword={this.deleteKeyword}
              jobSeeker={jobSeeker} 
              keyword={keyword}
              contactText={contactText}
            />
            <ExperienceForm 
              handleExp={this.handleExp} 
              handleBullets={this.handleBullets}
              addBullet={this.addBullet}
              deleteBullet={this.deleteBullet}
              onSubmitExp={this.onSubmitExp}
              deleteExp={this.deleteExp}
              showBulletEdit={this.showBulletEdit}
              experience={experience}
              experiences={experiences} 
            />
            <EducationForm
              handleEdu={this.handleEdu}
              onSubmitEdu={this.onSubmitEdu}
              handleEduNotes={this.handleEduNotes}
              addEduNote={this.addEduNote}
              deleteEduNote={this.deleteEduNote}
              deleteEdu={this.deleteEdu}
              education={education}
            />
          </div><br></br>
          <ReactToPrint
            trigger={()=> {
              return <button>Print Resume</button>
            }}
            content= {() => this.componentRef}
            documentTitle='Resume'
          />
        </div>
        <div className='resumeContainer' >
          <div className='generatedCV' ref={el => (this.componentRef=el)}>
            <ContactInfo 
              jobSeeker={jobSeeker} 
              keywords={keywords}  
            />
            <div className='experienceInfo'>
              <h2 className='sectionTitle'>Experience</h2>
              <ExperienceInfo 
                experiences={experiences} 
                experience={experience} 
                hidden={this.hidden}
              />
            </div>
            <div className='educationInfo'>
              <h2 className='sectionTitle'>Education</h2>
              <EducationInfo 
                education={education}
                educations={educations}
                hiddenEdu={this.hiddenEdu}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;


