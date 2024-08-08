import "../css/UserProfile.css";
import React, { useState, useRef }  from "react";
import NavBar from '../utility/NavBar'
import Textarea from '../utility/Textarea';
import upload from '../images/upload.svg'
import eye from '../images/eye.svg'
import gojo from "../images/gojo.png"

const UserProfile = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileInputChange = async (e) => {
    const selectedFile = e.target.files[0];
  
    if (!selectedFile) {
      return;
    }
  
    const fileUrl = URL.createObjectURL(selectedFile);
    setFileUrl(fileUrl);
  };

  const handleViewResumeClick = () => {
    if (!fileUrl) {
      return;
    }

    window.open(fileUrl, '_blank');
  };

  return (
    <div style={{background:"#E8FCFE", height:"100vh", width:"100%"}}>
        <NavBar />
        <div className="profile-rectangle">
            <img src={gojo} className="profile-pic-enlarged"></img>
            <div className="user-name">gojo</div>
            <div className="user-job">Frontend Developer</div>
            <div className="user-description">Introduction about me loreum ipsum Introduction about me loreum ipsum Introduction about me loreum ipsum </div>
            <div className="user-skills">Skills</div>
            <div className="skill1">React</div>
            <div className="skill2">User Interface</div>
            <div className="skill3">Product Management</div>
            <div className="skill4">Machine Learning</div>
            <div className="skill5">UI Design</div>
            <div className="skill6">UX</div>
            <div className="add-notes">Add Notes</div>
            <Textarea placeholder="Add notes for future reference" />
            <button className='search-button-notes'>
            Add Notes
          </button>
        </div>
        <div className="info-rectangle1">
          <div className="basic-info">Basic Information</div>
          <div className="age">AGE</div>
        
          <div className="sapid">SAPID</div>
           <div className="dept">DEPARTMENT</div>
         <div className="phone">PHONE NUMBER</div>
           <div className="email">EMAIL</div>
           <div className="age1">19</div> 
           <div className="sapid1">60004210036</div> 
           <div className="dept1">Computer Engineering</div> 
           <div className="phone1">9619121679</div> 
           <div className="email1">gojogandhi6112003@gmail.com</div>
          
            <label htmlFor="resume-input" className="upload-resume">
              <img src={upload} style={{ marginRight: '0.5rem' }}></img>
              Upload Resume
            </label>
            <input
              id="resume-input"
              type="file"
              accept=".pdf"
              onChange={handleFileInputChange}
              style={{ display: 'none' }}
            />
        
          {fileUrl && (
            <button className="view-resume" onClick={handleViewResumeClick}>
              <img src={eye} style={{ marginRight: '0.5rem' }}></img>
              View Resume
            </button>
          )}
          {!fileUrl && (
            <button className="view-resume" disabled>
              <img src={eye} style={{ marginRight: '0.5rem' }}></img>
              View Resume
            </button>
          )}
        </div>
        <div className="info-rectangle2">
          
        </div>
        <div className="info-rectangle3">
          
        </div>
    </div>
  )
}

export default UserProfile