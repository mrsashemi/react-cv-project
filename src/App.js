import './App.css';
import React, { useState, useRef } from 'react';
import { ExperienceForm, ExperienceInfo } from './components/Experience';
import { EducationForm, EducationInfo } from './components/Education';
import { ContactForm, ContactInfo } from './components/Contact';
import ReactToPrint from 'react-to-print';
import uniqid from "uniqid";

function App() {
  const [onSubmitInfo, setSubmitInfo] = useState(true);
  const [contactText, setContactText] = useState("Submit Personal Info");

  const [jobSeeker, setJobSeeeker] = useState({firstName: '', lastName: '', address: '', phone: '', email: '', objective: ''});
  const firstName = jobSeeker.firstName;
  const lastName = jobSeeker.lastName;
  const address = jobSeeker.address;
  const phone = jobSeeker.phone;
  const email = jobSeeker.email;
  const objective = jobSeeker.objective;

  const [keyword, setKeyword] = useState({text: '', id: uniqid()});
  const keywordId = keyword.id;
  const [keywords, setKeywords] = useState([]);

  const [experience, setExperience] = useState({position: '', company: '', city: '', start: '', end: '', id: uniqid(), bullet: { text: '', id: uniqid() }, bullets: []});
  const bullet = experience.bullet;
  const bullets = experience.bullets
  const [experiences, setExperiences] = useState([]);

  const [education, setEducation] = useState({college: '', collegeCity: '', degree: '', major: '', minor: '', collegeStart: '', collegeEnd: '', id: uniqid(), note: { text: '', id: uniqid() }, notes: []});
  const note = education.note;
  const notes = education.notes;
  const [educations, setEducations] = useState([]);

  const hidden = React.createRef();
  const hiddenEdu = React.createRef();
  const componentRef = useRef();
  
  //Create handle functions to preview form values in the CV while typing
  function handleChange(e) {
    const { name, value } = e.target;
    if (onSubmitInfo) setJobSeeeker(prevJobSeeker => { return {...prevJobSeeker, [name]: value} })
  };

  function handleExp(e) {
    hidden.current.className = "active";
    const { name, value } = e.target;

    setExperience(prevExperience => {
      return {...prevExperience, [name]: value}
    })
  };

  function handleEdu(e) {
    hiddenEdu.current.className = "active";
    const { name, value } = e.target;

    setEducation(prevEducation => {
      return {...prevEducation, [name]: value}
    })
  };

  function handleKeywords(e) {
    setKeyword(() => {
      return {text: e.target.value, id: keywordId}
    })
  }

  function handleBullets(e) {
    setExperience(prevExperience => {
      return {...prevExperience, bullet: { text: e.target.value, id: experience.bullet.id }}
    })
  }

  function handleEduNotes(e) {
    setEducation(prevEducation => {
      return {...prevEducation, note: { text: e.target.value, id: education.note.id }}
    })
  }

  //Create onsubmit functions to input form data into the CV
  function onSubmitContact(e) {
    e.preventDefault();

    if(onSubmitInfo) {
      setJobSeeeker(() => {
        return { firstName: firstName, lastName: lastName, address: address, phone: phone, email: email, objective: objective }
      })

      setSubmitInfo(() => false)
      setContactText(() => "Edit Info")
    } else {
      setJobSeeeker(() => {
        return { firstName: firstName, lastName: lastName, address: address, phone: phone, email: email, objective: objective }
      })

      setSubmitInfo(() => true)
      setContactText(() => "Submit Personal Info")
    }
  };

  function onSubmitExp(e) {
    e.preventDefault();
    hidden.current.className = "hidden";

    setExperiences(() => experiences.concat(experience));
    setExperience(() => {
      return { position: '', company: '', city: '', start: '', end: '', id: uniqid(), bullet: { text: '', id: uniqid() }, bullets: [] }
    })
  };

  function onSubmitEdu(e) {
    e.preventDefault();
    hiddenEdu.current.className = "hidden";

    setEducations(() => educations.concat(education));
    setEducation(() => {
      return { college: '', collegeCity: '', degree: '', major: '', minor: '', collegeStart: '', collegeEnd: '', id: uniqid(), note: { text: '', id: uniqid() }, notes: [] }
    })
  };

  //Create add functions to add bullet points to the CV 
  function addKeyword() {
    setKeywords(() => keywords.concat(keyword));
    setKeyword(() => {
      return { text: '', id: uniqid() }
    })
  };

  function addBullet() {
    hidden.current.className = "active";

    setExperience(prevExperience => {
      return {...prevExperience, bullets: bullets.concat(bullet), bullet: { text: '', id: uniqid() }}
    })
  };

  function addEduNote() {
    hiddenEdu.current.className = "active";

    setEducation(prevEducation => {
      return {...prevEducation, notes: notes.concat(note), note: { text: '', id: uniqid() }}
    })
  };

  //Add delete functionality to remove bullet points or components from various CV sections
  function deleteKeyword() {
    let keyId;
    if (keywords.length > 0) keyId = keywords[keywords.length - 1].id;
    const filterKeywords = keywords.filter(k => { return k.id !== keyId });

    setKeywords(() => [...filterKeywords]);
    setKeyword(() => {
      return { text: '', id: uniqid() }
    })
  }

  function deleteBullet() {
    let bulletId;
    if (bullets.length > 0) bulletId = bullets[bullets.length - 1].id;
    const filterBullets = bullets.filter(b => { return b.id !== bulletId});

    setExperience(prevExperience => {
      return {...prevExperience, bullets: [...filterBullets], bullet: { text: '', id: uniqid() }}
    })
  }

  function deleteEduNote() {
    let noteId;
    if (notes.length > 0) noteId = notes[notes.length - 1].id;
    const filterNotes = notes.filter(n => { return n.id !== noteId });

    setEducation(prevEducation => {
      return {...prevEducation, notes: [...filterNotes], note: { text: '', id: uniqid() }}
    })
  }

  function deleteExp(e) {
    e.preventDefault();
    let expId;
    if (experiences.length > 0) expId = experiences[experiences.length - 1].id
    const filterExperiences = experiences.filter(exp => { return exp.id !== expId })

    setExperiences(() => [...filterExperiences]);
    setExperience(() => {
      return { position: '', company: '', city: '', start: '', end: '', id: uniqid(), bullet: { text: '', id: uniqid() }, bullets: [] }
    })
  }

  function deleteEdu(e) {
    e.preventDefault();
    let eduId;
    if (educations.length > 0) eduId = educations[educations.length - 1].id
    const filterEducations = educations.filter(edu => { return edu.id !== eduId })

    setEducations(() => [...filterEducations]);
    setEducation(() => {
      return { college: '', collegeCity: '', degree: '', major: '', minor: '', collegeStart: '', collegeEnd: '', id: uniqid(), note: { text: '', id: uniqid() }, notes: [] }
    })
  }

  return (
    <div className='container'>
      <div className='CVForm'>
        <div className='resumeGenTitle'>Resume Generator</div>
        <div>
          <ContactForm 
            handleChange={handleChange} 
            handleKeywords={handleKeywords} 
            onSubmitContact={onSubmitContact}
            addKeyword={addKeyword} 
            deleteKeyword={deleteKeyword}
            jobSeeker={jobSeeker} 
            keyword={keyword}
            contactText={contactText}
          />
          <ExperienceForm 
            handleExp={handleExp} 
            handleBullets={handleBullets}
            addBullet={addBullet}
            deleteBullet={deleteBullet}
            onSubmitExp={onSubmitExp}
            deleteExp={deleteExp}
            experience={experience}
            experiences={experiences} 
          />
          <EducationForm
            handleEdu={handleEdu}
            onSubmitEdu={onSubmitEdu}
            handleEduNotes={handleEduNotes}
            addEduNote={addEduNote}
            deleteEduNote={deleteEduNote}
            deleteEdu={deleteEdu}
            education={education}
          />
        </div><br></br>
        <ReactToPrint
          trigger={()=> {
            return <button>Print Resume</button>
          }}
          content= {() => componentRef.current}
        />
      </div>
      <div className='resumeContainer' >
        <div className='generatedCV' ref={componentRef}>
          <ContactInfo 
            jobSeeker={jobSeeker} 
            keywords={keywords}  
          />
          <div className='experienceInfo'>
            <h2 className='sectionTitle'>Experience</h2>
            <ExperienceInfo 
              experiences={experiences} 
              experience={experience} 
              hidden={hidden}
            />
          </div>
          <div className='educationInfo'>
            <h2 className='sectionTitle'>Education</h2>
            <EducationInfo 
              education={education}
              educations={educations}
              hiddenEdu={hiddenEdu}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;


